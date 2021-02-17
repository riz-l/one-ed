// Import: Dependencies
import React, { useState, useEffect } from "react";

// Import: Elements
import { Column, Container, Grid, Heading, Item } from "./Neuro.elements";

// Import: Components
import { Checkbox, Dropdown, ReportForm, Text } from "../../../../components";

// SubPage: Neuro
export default function Neuro({ db }) {
  // State: neuroForm
  const [neuroForm, setNeuroForm] = useState({
    eyes: "",
    verbal: "",
    motor: "",
    equal: false,
    unequal: false,
    leftPupilSize: "",
    leftPupilReaction: "",
    rightPupilSize: "",
    rightPupilReaction: "",
    leftArm: "",
    leftLeg: "",
    rightArm: "",
    rightLeg: "",
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

  // Effect: Set neuroForm values to === values.TASNeuro
  // ... if no values are in the database, set values === ""
  useEffect(() => {
    // Create database store
    db.version(1).stores({ formData: "id, value" });

    // Read/write transaction on new database store
    db.transaction("rw", db.formData, async () => {
      // Get all neuroForm values from database data
      const dbEyes = await db.formData.get("eyes");
      const dbVerbal = await db.formData.get("verbal");
      const dbMotor = await db.formData.get("motor");
      const dbEqual = await db.formData.get("equal");
      const dbUnequal = await db.formData.get("unequal");
      const dbLeftPupilSize = await db.formData.get("leftPupilSize");
      const dbLeftPupilReaction = await db.formData.get("leftPupilReaction");
      const dbRightPupilSize = await db.formData.get("rightPupilSize");
      const dbRightPupilReaction = await db.formData.get("rightPupilReaction");
      const dbLeftArm = await db.formData.get("leftArm");
      const dbLeftLeg = await db.formData.get("leftLeg");
      const dbRightArm = await db.formData.get("rightArm");
      const dbRightLeg = await db.formData.get("rightLeg");

      // If the neuroForm values have not been added, populate with false || ""
      if (!dbEyes) await db.formData.add({ id: "eyes", value: "" });
      if (!dbVerbal) await db.formData.add({ id: "verbal", value: "" });
      if (!dbMotor) await db.formData.add({ id: "motor", value: "" });
      if (!dbEqual) await db.formData.add({ id: "equal", value: false });
      if (!dbUnequal) await db.formData.add({ id: "unequal", value: false });
      if (!dbLeftPupilSize)
        await db.formData.add({ id: "leftPupilSize", value: "" });
      if (!dbLeftPupilReaction)
        await db.formData.add({ id: "leftPupilReaction", value: "" });
      if (!dbRightPupilSize)
        await db.formData.add({ id: "rightPupilSize", value: "" });
      if (!dbRightPupilReaction)
        await db.formData.add({ id: "rightPupilReaction", value: "" });
      if (!dbLeftArm) await db.formData.add({ id: "leftArm", value: "" });
      if (!dbLeftLeg) await db.formData.add({ id: "leftLeg", value: "" });
      if (!dbRightArm) await db.formData.add({ id: "rightArm", value: "" });
      if (!dbRightLeg) await db.formData.add({ id: "rightLeg", value: "" });

      // Set the initial values
      setNeuroForm({
        eyes: dbEyes ? dbEyes.value : "",
        verbal: dbVerbal ? dbVerbal.value : "",
        motor: dbMotor ? dbMotor.value : "",
        equal: dbEqual ? dbEqual.value : false,
        unequal: dbUnequal ? dbUnequal.value : false,
        leftPupilSize: dbLeftPupilSize ? dbLeftPupilSize.value : "",
        leftPupilReaction: dbLeftPupilReaction ? dbLeftPupilReaction.value : "",
        rightPupilSize: dbRightPupilSize ? dbRightPupilSize.value : "",
        rightPupilReaction: dbRightPupilReaction
          ? dbRightPupilReaction.value
          : "",
        leftArm: dbLeftArm ? dbLeftArm.value : "",
        leftLeg: dbLeftLeg ? dbLeftLeg.value : "",
        rightArm: dbRightArm ? dbRightArm.value : "",
        rightLeg: dbRightLeg ? dbRightLeg.value : "",
      });
    }).catch((error) => {
      console.log(error.stack || error);
      throw new Error(error.stack || error);
    });

    // Close the database connection if Neuro is unmounted
    // ... or if the database connection changes
    return () => db.close();
  }, [db]);

  // Sets the values in the store and in the state
  const setFormValues = (id) => (value, checked) => {
    // Update store
    db.formData.put({ id, value, checked });

    // Update state
    setNeuroForm((prevFormValues) => ({
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

  // Delete IndexedDB TASNeuro database
  function pleaseDelete() {
    indexedDB.deleteDatabase("TASNeuro").onsuccess = function () {
      console.log("TASNeuro Delete Successful");
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
          Neuro Observations
        </Text>
      </Heading>

      <ReportForm>
        <Text as="h2" heading margin="0 0 0.8rem 0">
          GCS
        </Text>

        <Grid margin="0 0 2rem 0">
          <Column>
            <Item>
              <Dropdown
                htmlFor="eyes"
                labelText="Eyes"
                onChange={handleInputValues("eyes")}
                options={dropdownOptions}
                value={neuroForm.eyes}
                width="250px"
              />
            </Item>

            <Item>
              <Dropdown
                htmlFor="verbal"
                labelText="Verbal"
                onChange={handleInputValues("verbal")}
                options={dropdownOptions}
                value={neuroForm.verbal}
                width="250px"
              />
            </Item>

            <Item>
              <Dropdown
                htmlFor="motor"
                labelText="Motor"
                onChange={handleInputValues("motor")}
                options={dropdownOptions}
                value={neuroForm.motor}
                width="250px"
              />
            </Item>
          </Column>

          <Column>
            <Item>
              <Text as="h2" heading>
                GCS Total
              </Text>
            </Item>
          </Column>
        </Grid>

        <Text as="h2" heading margin="0 0 0.8rem 0">
          Pupils
        </Text>

        <Grid margin="0 0 1rem 0">
          <Column>
            <Grid>
              <Column>
                <Item>
                  <Checkbox
                    checked={neuroForm.equal}
                    onChange={handleCheckboxValues("equal")}
                    text="Equal"
                    value={neuroForm.equal}
                    name="equal"
                    id="equal"
                  />
                </Item>
              </Column>

              <Column>
                <Item>
                  <Checkbox
                    checked={neuroForm.unequal}
                    onChange={handleCheckboxValues("unequal")}
                    text="Unequal"
                    value={neuroForm.unequal}
                    name="unequal"
                    id="unequal"
                  />
                </Item>
              </Column>
            </Grid>
          </Column>

          <Column>
            <></>
          </Column>
        </Grid>

        <Grid margin="0 0 2rem 0">
          <Column>
            <Item>
              <Dropdown
                htmlFor="leftPupilSize"
                labelText="Left Pupil Size (mm)"
                onChange={handleInputValues("leftPupilSize")}
                options={dropdownOptions}
                value={neuroForm.leftPupilSize}
                width="250px"
              />
            </Item>

            <Item>
              <Dropdown
                htmlFor="leftPupilReaction"
                labelText="Left Pupil Reaction"
                onChange={handleInputValues("leftPupilReaction")}
                options={dropdownOptions}
                value={neuroForm.leftPupilReaction}
                width="250px"
              />
            </Item>
          </Column>

          <Column>
            <Item>
              <Dropdown
                htmlFor="rightPupilSize"
                labelText="Right Pupil Size (mm)"
                onChange={handleInputValues("rightPupilSize")}
                options={dropdownOptions}
                value={neuroForm.rightPupilSize}
                width="250px"
              />
            </Item>

            <Item>
              <Dropdown
                htmlFor="rightPupilReaction"
                labelText="Right Pupil Reaction"
                onChange={handleInputValues("rightPupilReaction")}
                options={dropdownOptions}
                value={neuroForm.rightPupilReaction}
                width="250px"
              />
            </Item>
          </Column>
        </Grid>

        <Text as="h2" heading margin="0 0 0.8rem 0">
          Limb Movement
        </Text>

        <Grid>
          <Column>
            <Item>
              <Dropdown
                htmlFor="leftArm"
                labelText="Left Arm"
                onChange={handleInputValues("leftArm")}
                options={dropdownOptions}
                value={neuroForm.leftArm}
                width="250px"
              />
            </Item>

            <Item>
              <Dropdown
                htmlFor="leftLeg"
                labelText="Left Leg"
                onChange={handleInputValues("leftLeg")}
                options={dropdownOptions}
                value={neuroForm.leftLeg}
                width="250px"
              />
            </Item>
          </Column>

          <Column>
            <Item>
              <Dropdown
                htmlFor="rightArm"
                labelText="Right Arm"
                onChange={handleInputValues("rightArm")}
                options={dropdownOptions}
                value={neuroForm.rightArm}
                width="250px"
              />
            </Item>

            <Item>
              <Dropdown
                htmlFor="rightLeg"
                labelText="Right Leg"
                onChange={handleInputValues("rightLeg")}
                options={dropdownOptions}
                value={neuroForm.rightLeg}
                width="250px"
              />
            </Item>
          </Column>
        </Grid>
      </ReportForm>
    </Container>
  );
}
