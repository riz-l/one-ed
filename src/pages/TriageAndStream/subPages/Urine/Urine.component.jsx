// Import: Dependencies
import React, { useState, useEffect } from "react";

// Import: Elements
import { Column, Container, Grid, Heading, Item } from "./Urine.elements";

// Import: Components
import {
  Dropdown,
  Checkbox,
  RadioButton,
  ReportForm,
  Text,
} from "../../../../components";

// SubPage: Urine
export default function Urine({ db }) {
  // State: urineForm
  const [urineForm, setUrineForm] = useState({
    nad: false,
    pro: "",
    bld: "",
    glu: "",
    leu: "",
    nit: "",
    ket: "",
    testRadio: "",
  });

  // Dropdown Options
  const dropdownOptions = [
    "Drug A",
    "Drug B",
    "Drug C",
    "Drug D",
    "Drug E",
    "Drug F",
    "Drug G",
    "Drug H",
    "Drug I",
    "Drug J",
    "Drug K",
  ];

  // Effect: Set urineForm values to === values.TASUrine
  // ... if no values are in the database, set values === ""
  useEffect(() => {
    // Create database store
    db.version(1).stores({ formData: "id, value" });

    // Read/write transaction on new database store
    db.transaction("rw", db.formData, async () => {
      // Get all urineForm values from database data
      const dbNad = await db.formData.get("nad");
      const dbPro = await db.formData.get("pro");
      const dbBld = await db.formData.get("bld");
      const dbGlu = await db.formData.get("glu");
      const dbLeu = await db.formData.get("leu");
      const dbNit = await db.formData.get("nit");
      const dbKet = await db.formData.get("ket");
      const dbTestRadio = await db.formData.get("testRadio");

      // If the urineForm values have not been added, populate with false || ""
      if (!dbNad) await db.formData.add({ id: "nad", value: false });
      if (!dbPro) await db.formData.add({ id: "pro", value: "" });
      if (!dbBld) await db.formData.add({ id: "bld", value: "" });
      if (!dbGlu) await db.formData.add({ id: "glu", value: "" });
      if (!dbLeu) await db.formData.add({ id: "leu", value: "" });
      if (!dbNit) await db.formData.add({ id: "nit", value: "" });
      if (!dbKet) await db.formData.add({ id: "ket", value: "" });
      if (!dbTestRadio) await db.formData.add({ id: "testRadio", value: "" });

      // Set the initial values
      setUrineForm({
        nad: dbNad ? dbNad.value : false,
        pro: dbPro ? dbPro.value : "",
        bld: dbBld ? dbBld.value : "",
        glu: dbGlu ? dbGlu.value : "",
        leu: dbLeu ? dbLeu.value : "",
        nit: dbNit ? dbNit.value : "",
        ket: dbKet ? dbKet.value : "",
        testRadio: dbTestRadio ? dbTestRadio.value : "",
      });
    }).catch((error) => {
      console.log(error.stack || error);
      throw new Error(error.stack || error);
    });

    // Close the database connection if Urine is unmounted
    // ... or if the database connection changes
    return () => db.close();
  }, [db]);

  // Sets the values in the store and in the state
  const setFormValues = (id) => (value, checked) => {
    // Update store
    db.formData.put({ id, value, checked });

    // Update state
    setUrineForm((prevFormValues) => ({
      ...prevFormValues,
      [id]: value,
      checked,
    }));
  };

  // Partial application to make on change handler easier to apply
  // ... used for checkbox inputs
  const handleCheckboxValues = (id) => (e) =>
    setFormValues(id)(e.target.checked ? true : false);

  // ... used for stringed text inputs
  const handleInputValues = (id) => (e) => setFormValues(id)(e.target.value);

  // Delete IndexedDB TASUrine database
  function pleaseDelete() {
    indexedDB.deleteDatabase("TASUrine").onsuccess = function () {
      console.log("TASUrine Delete Successful");
    };
  }

  // Delete IndexedDB data on browser/tab close and/or refresh
  // ... prompts user that they are about to leave the page/lose data
  // window.addEventListener("beforeunload", () => pleaseDelete());
  window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
    e.returnValue = "Are you sure you want to close?";
    pleaseDelete();
  });

  return (
    <Container>
      <Heading>
        <Text as="h2" heading>
          Urine Observations
        </Text>
      </Heading>

      <ReportForm>
        <Grid>
          <Column>
            <Item>
              <Checkbox
                checked={urineForm.nad}
                onChange={handleCheckboxValues("nad")}
                text="NAD"
                value={urineForm.nad}
                htmlFor="nad"
              />
            </Item>
          </Column>
        </Grid>

        <Grid>
          <Column>
            <Item>
              <Dropdown
                htmlFor="pro"
                labelText="Pro"
                onChange={handleInputValues("pro")}
                options={dropdownOptions}
                value={urineForm.pro}
                width="250px"
              />
            </Item>

            <Item>
              <Dropdown
                htmlFor="bld"
                labelText="Bld"
                onChange={handleInputValues("bld")}
                options={dropdownOptions}
                value={urineForm.bld}
                width="250px"
              />
            </Item>

            <Item>
              <Dropdown
                htmlFor="glu"
                labelText="Glu"
                onChange={handleInputValues("glu")}
                options={dropdownOptions}
                value={urineForm.glu}
                width="250px"
              />
            </Item>
          </Column>

          <Column>
            <Item>
              <Dropdown
                htmlFor="leu"
                labelText="Leu"
                onChange={handleInputValues("leu")}
                options={dropdownOptions}
                value={urineForm.leu}
                width="250px"
              />
            </Item>

            <Item>
              <Dropdown
                htmlFor="nit"
                labelText="Nit"
                onChange={handleInputValues("nit")}
                options={dropdownOptions}
                value={urineForm.nit}
                width="250px"
              />
            </Item>

            <Item>
              <Dropdown
                htmlFor="ket"
                labelText="Ket"
                onChange={handleInputValues("ket")}
                options={dropdownOptions}
                value={urineForm.ket}
                width="250px"
              />
            </Item>
          </Column>
        </Grid>

        <Grid>
          <Column>
            <RadioButton
              checked={urineForm.testRadio === "First Radio"}
              text="First RadioButton"
              value="First Radio"
              name="test"
              onChange={handleInputValues("testRadio")}
            />

            <RadioButton
              checked={urineForm.testRadio === "Second Radio"}
              text="Second RadioButton"
              value="Second Radio"
              name="test"
              onChange={handleInputValues("testRadio")}
            />
          </Column>
        </Grid>
      </ReportForm>
    </Container>
  );
}
