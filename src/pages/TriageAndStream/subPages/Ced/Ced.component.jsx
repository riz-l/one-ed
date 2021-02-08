// Import: Dependencies
import React, { useState } from "react";

// Import: Elements
import { Column, Container, Grid, Heading, Item } from "./Ced.elements";

// Import: Components
import { Dropdown, Input, ReportForm, Text } from "../../../../components";

// SubPage: Ced
export default function Ced() {
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
              {/* <Dropdown
                htmlFor="painScore"
                labelText="Pain Score"
                options={dropdownOptions}
                value={cedForm.painScore}
                width="250px"
              /> */}
            </Item>

            <Item>
              {/* <Input
                htmlFor="pulseRate"
                labelText="Pulse Rate"
                type="text"
                value={cedForm.pulseRate}
                width="100px"
              /> */}
            </Item>

            <Grid>
              <Column>
                <Item>
                  {/* <Input
                    htmlFor="bpSystolicFirst"
                    labelText="BP Systolic"
                    type="text"
                    value={cedForm.bpSystolicFirst}
                    width="100px"
                  /> */}
                </Item>
              </Column>

              <Column>
                <Item>
                  {/* <Input
                    htmlFor="bpSystolicSecond"
                    labelText="BP Systolic"
                    type="text"
                    value={cedForm.bpSystolicSecond}
                    width="100px"
                  /> */}
                </Item>
              </Column>
            </Grid>

            <Item>
              {/* <Input
                htmlFor="respRate"
                labelText="Resp Rate"
                type="text"
                value={cedForm.respRate}
                width="100px"
              /> */}
            </Item>

            <Item>
              {/* <Input
                htmlFor="oxygenSats"
                labelText="Oxygen SATS"
                type="text"
                value={cedForm.oxygenSats}
                width="100px"
              /> */}
            </Item>

            <Item>
              {/* <Dropdown
                htmlFor="supplementalO2"
                labelText="Supplemental O2"
                options={dropdownOptions}
                value={cedForm.supplementalO2}
                width="250px"
              /> */}
            </Item>

            <Item>
              {/* <Input
                htmlFor="temp"
                labelText="Temp"
                type="text"
                value={cedForm.temp}
                width="100px"
              /> */}
            </Item>
          </Column>

          <Column>
            <Grid>
              <Column>
                <Item>
                  {/* <Input
                    htmlFor="weight"
                    labelText="Weight (kg)"
                    type="text"
                    value={cedForm.weight}
                    width="180px"
                  /> */}
                </Item>
              </Column>

              <Column>
                <Item>
                  {/* <Input
                    htmlFor="height"
                    labelText="Height (cm)"
                    type="text"
                    value={cedForm.height}
                    width="180px"
                  /> */}
                </Item>
              </Column>
            </Grid>

            <Grid>
              <Column>
                <Item>
                  {/* <Input
                    htmlFor="bloodSugar"
                    labelText="Blood Sugar (mmol/l)"
                    type="text"
                    value={cedForm.bloodSugar}
                    width="180px"
                  /> */}
                </Item>
              </Column>

              <Column>
                <Item>
                  {/* <Input
                    htmlFor="pefr"
                    labelText="PEFR (l/min)"
                    type="text"
                    value={cedForm.pefr}
                    width="180px"
                  /> */}
                </Item>
              </Column>
            </Grid>

            <Item>
              {/* <Dropdown
                htmlFor="capillaryRefill"
                labelText="Capillary Refill"
                options={dropdownOptions}
                value={cedForm.capillaryRefill}
                width="180px"
              /> */}
            </Item>
          </Column>
        </Grid>

        <Grid>
          <Column>
            <Item>
              {/* <Dropdown
                htmlFor="popsOther"
                labelText="POPS Other"
                options={dropdownOptions}
                value={cedForm.popsOther}
                width="580px"
              /> */}
            </Item>

            <Item>
              {/* <Dropdown
                htmlFor="popsGutFeeling"
                labelText="POPS Gut Feeling"
                options={dropdownOptions}
                value={cedForm.popsGutFeeling}
                width="580px"
              /> */}
            </Item>

            <Item>
              {/* <Dropdown
                htmlFor="popsBreathing"
                labelText="POPS Breathing"
                options={dropdownOptions}
                value={cedForm.popsBreathing}
                width="580px"
              /> */}
            </Item>

            <Item>
              {/* <Dropdown
                htmlFor="avpu"
                labelText="AVPU"
                options={dropdownOptions}
                value={cedForm.avpu}
                width="580px"
              /> */}
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
