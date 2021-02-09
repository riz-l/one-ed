// Import: Dependencies
import React, { useState, useEffect } from "react";

// Import: Elements
import { Column, Container, Grid, Heading, Item } from "./Ced.elements";

// Import: Components
import { Dropdown, Input, ReportForm, Text } from "../../../../components";

// SubPage: Ced
export default function Ced({ db }) {
  // State: cedForm
  const [cedForm, setCedForm] = useState({
    painScore: "",
    pulseRate: "",
    bpSystolicFirst: "",
    bpSystolicSecond: "",
    respRate: "",
    oxygenSats: "",
    supplementalO2: "",
    temp: "",
    popsOther: "",
    popsGutFeeling: "",
    popsBreathing: "",
    avpu: "",
    weight: "",
    height: "",
    bloodSugar: "",
    pefr: "",
    capillaryRefill: "",
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

  // Effect: Set cedForm values to === values.TASCed
  // ... if no values are in the database, set values === ""
  useEffect(() => {
    // Create database store
    db.version(1).stores({ formData: "id, value" });

    // Read/write transaction on new database store
    db.transaction("rw", db.formData, async () => {
      // Get all cedForm values from database data
      const dbPainScore = await db.formData.get("painScore");
      const dbPulseRate = await db.formData.get("pulseRate");
      const dbSystolicFirst = await db.formData.get("bpSystolicFirst");
      const dbSystolicSecond = await db.formData.get("bpSystolicSecond");
      const dbRespRate = await db.formData.get("respRate");
      const dbOxygenSats = await db.formData.get("oxygenSats");
      const dbSupplementalO2 = await db.formData.get("supplementalO2");
      const dbTemp = await db.formData.get("temp");
      const dbPopsOther = await db.formData.get("popsOther");
      const dbPopsGutFeeling = await db.formData.get("popsGutFeeling");
      const dbPopsBreathing = await db.formData.get("popsBreathing");
      const dbAvpu = await db.formData.get("avpu");
      const dbWeight = await db.formData.get("weight");
      const dbHeight = await db.formData.get("height");
      const dbBloodSugar = await db.formData.get("bloodSugar");
      const dbPefr = await db.formData.get("pefr");
      const dbCapillaryRefill = await db.formData.get("capillaryRefill");

      // If the neuroForm values have not been added, populate with false || ""
      if (!dbPainScore) await db.formData.add({ id: "painScore", value: "" });
      if (!dbPulseRate) await db.formData.add({ id: "pulseRate", value: "" });
      if (!dbSystolicFirst)
        await db.formData.add({ id: "bpSystolicFirst", value: "" });
      if (!dbSystolicSecond)
        await db.formData.add({ id: "bpSystolicSecond", value: "" });
      if (!dbRespRate) await db.formData.add({ id: "respRate", value: "" });
      if (!dbOxygenSats) await db.formData.add({ id: "oxygenSats", value: "" });
      if (!dbSupplementalO2)
        await db.formData.add({ id: "supplementalO2", value: "" });
      if (!dbTemp) await db.formData.add({ id: "temp", value: "" });
      if (!dbPopsOther) await db.formData.add({ id: "popsOther", value: "" });
      if (!dbPopsGutFeeling)
        await db.formData.add({ id: "popsGutFeeling", value: "" });
      if (!dbPopsBreathing)
        await db.formData.add({ id: "popsBreathing", value: "" });
      if (!dbAvpu) await db.formData.add({ id: "avpu", value: "" });
      if (!dbWeight) await db.formData.add({ id: "weight", value: "" });
      if (!dbHeight) await db.formData.add({ id: "height", value: "" });
      if (!dbBloodSugar) await db.formData.add({ id: "bloodSugar", value: "" });
      if (!dbPefr) await db.formData.add({ id: "pefr", value: "" });
      if (!dbCapillaryRefill)
        await db.formData.add({ id: "capillaryRefill", value: "" });

      // Set the initial values
      setCedForm({
        painScore: dbPainScore ? dbPainScore.value : "",
        pulseRate: dbPulseRate ? dbPulseRate.value : "",
        bpSystolicFirst: dbSystolicFirst ? dbSystolicFirst.value : "",
        bpSystolicSecond: dbSystolicSecond ? dbSystolicSecond.value : "",
        respRate: dbRespRate ? dbRespRate.value : "",
        oxygenSats: dbOxygenSats ? dbOxygenSats.value : "",
        supplementalO2: dbSupplementalO2 ? dbSupplementalO2.value : "",
        temp: dbTemp ? dbTemp.value : "",
        popsOther: dbPopsOther ? dbPopsOther.value : "",
        popsGutFeeling: dbPopsGutFeeling ? dbPopsGutFeeling.value : "",
        popsBreathing: dbPopsBreathing ? dbPopsBreathing.value : "",
        avpu: dbAvpu ? dbAvpu.value : "",
        weight: dbWeight ? dbWeight.value : "",
        height: dbHeight ? dbHeight.value : "",
        bloodSugar: dbBloodSugar ? dbBloodSugar.value : "",
        pefr: dbPefr ? dbPefr.value : "",
        capillaryRefill: dbCapillaryRefill ? dbCapillaryRefill.value : "",
      });
    }).catch((error) => {
      console.log(error.stack || error);
      throw new Error(error.stack || error);
    });

    // Close the database connection if Ced is unmounted
    // ... or if the database connection changes
    return () => db.close();
  }, [db]);

  // Sets the values in the store and in the state
  const setFormValues = (id) => (value, checked) => {
    // Update store
    db.formData.put({ id, value, checked });

    // Update state
    setCedForm((prevFormValues) => ({
      ...prevFormValues,
      [id]: value,
      checked,
    }));
  };

  // Partial application to make on change handler easier to apply

  // ... used for stringed text inputs
  const handleInputValues = (id) => (e) => setFormValues(id)(e.target.value);

  // Delete IndexedDB TASCed database
  function pleaseDelete() {
    indexedDB.deleteDatabase("TASCed").onsuccess = function () {
      console.log("TASCed Delete Successful");
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
          CED Observations
        </Text>
      </Heading>

      <ReportForm>
        <Grid>
          <Column>
            <Item>
              <Dropdown
                htmlFor="painScore"
                labelText="Pain Score"
                onChange={handleInputValues("painScore")}
                options={dropdownOptions}
                value={cedForm.painScore}
                width="250px"
              />
            </Item>

            <Item>
              <Input
                type="text"
                labelText="Pulse Rate"
                onChange={handleInputValues("pulseRate")}
                value={cedForm.pulseRate}
                htmlFor="pulseRate"
                width="100px"
              />
            </Item>

            <Grid>
              <Column>
                <Item>
                  <Input
                    type="text"
                    labelText="BP Systolic First"
                    onChange={handleInputValues("bpSystolicFirst")}
                    value={cedForm.bpSystolicFirst}
                    htmlFor="bpSystolicFirst"
                    width="100px"
                  />
                </Item>
              </Column>

              <Column>
                <Item>
                  <Input
                    type="text"
                    labelText="BP Systolic Second"
                    onChange={handleInputValues("bpSystolicSecond")}
                    value={cedForm.bpSystolicSecond}
                    htmlFor="bpSystolicSecond"
                    width="100px"
                  />
                </Item>
              </Column>
            </Grid>

            <Item>
              <Input
                type="text"
                labelText="Resp Rate"
                onChange={handleInputValues("respRate")}
                value={cedForm.respRate}
                htmlFor="respRate"
                width="100px"
              />
            </Item>

            <Item>
              <Input
                type="text"
                labelText="Oxygen SATS"
                onChange={handleInputValues("oxygenSats")}
                value={cedForm.oxygenSats}
                htmlFor="oxygenSats"
                width="100px"
              />
            </Item>

            <Item>
              <Dropdown
                htmlFor="supplementalO2"
                onChange={handleInputValues("supplementalO2")}
                labelText="Supplemental O2"
                options={dropdownOptions}
                value={cedForm.supplementalO2}
                width="250px"
              />
            </Item>

            <Item>
              <Input
                type="text"
                onChange={handleInputValues("temp")}
                labelText="Temp"
                value={cedForm.temp}
                htmlFor="temp"
                width="100px"
              />
            </Item>
          </Column>

          <Column>
            <Grid>
              <Column>
                <Item>
                  <Input
                    type="text"
                    onChange={handleInputValues("weight")}
                    labelText="Weight (kg)"
                    value={cedForm.weight}
                    htmlFor="weight"
                    width="180px"
                  />
                </Item>
              </Column>

              <Column>
                <Item>
                  <Input
                    type="text"
                    onChange={handleInputValues("height")}
                    labelText="Height (cm)"
                    value={cedForm.height}
                    htmlFor="height"
                    width="180px"
                  />
                </Item>
              </Column>
            </Grid>

            <Grid>
              <Column>
                <Item>
                  <Input
                    type="text"
                    onChange={handleInputValues("bloodSugar")}
                    labelText="Blood Sugar (mmol/l)"
                    value={cedForm.bloodSugar}
                    htmlFor="bloodSugar"
                    width="180px"
                  />
                </Item>
              </Column>

              <Column>
                <Item>
                  <Input
                    type="text"
                    onChange={handleInputValues("pefr")}
                    labelText="PEFR (l/min)"
                    value={cedForm.pefr}
                    htmlFor="pefr"
                    width="180px"
                  />
                </Item>
              </Column>
            </Grid>

            <Item>
              <Dropdown
                htmlFor="capillaryRefill"
                onChange={handleInputValues("capillaryRefill")}
                labelText="Capillary Refill"
                options={dropdownOptions}
                value={cedForm.capillaryRefill}
                width="180px"
              />
            </Item>
          </Column>
        </Grid>

        <Grid>
          <Column>
            <Item>
              <Dropdown
                htmlFor="popsOther"
                onChange={handleInputValues("popsOther")}
                labelText="POPS Other"
                options={dropdownOptions}
                value={cedForm.popsOther}
                width="580px"
              />
            </Item>

            <Item>
              <Dropdown
                htmlFor="popsGutFeeling"
                onChange={handleInputValues("popsGutFeeling")}
                labelText="POPS Gut Feeling"
                options={dropdownOptions}
                value={cedForm.popsGutFeeling}
                width="580px"
              />
            </Item>

            <Item>
              <Dropdown
                htmlFor="popsBreathing"
                onChange={handleInputValues("popsBreathing")}
                labelText="POPS Breathing"
                options={dropdownOptions}
                value={cedForm.popsBreathing}
                width="580px"
              />
            </Item>

            <Item>
              <Dropdown
                htmlFor="avpu"
                onChange={handleInputValues("avpu")}
                labelText="AVPU"
                options={dropdownOptions}
                value={cedForm.avpu}
                width="580px"
              />
            </Item>

            <Text as="h2" heading margin="2rem 0 0 0">
              POPS Score
            </Text>
          </Column>
        </Grid>
      </ReportForm>
    </Container>
  );
}
