// Import: Dependencies
import React from "react";

// Import: Elements
import { Column, Container, Grid, Heading, Item } from "./Ced.elements";

// Import: Components
import {
  Dropdown,
  Input,
  ReportForm,
  ReportInput,
  ReportLabel,
} from "../../../../components";

// SubPage: Ced
export default function Ced() {
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
        <h2>CED Observations</h2>
      </Heading>

      <ReportForm>
        <Grid>
          <Column style={{ marginTop: "1.5rem" }}>
            <Item>
              <Dropdown
                htmlFor="pain-score"
                labelText="Pain Score"
                options={dropdownOptions}
                width="200px"
                left
              />
            </Item>

            <Item>
              <Input htmlFor="test-input" labelText="Pulse Rate" left />
            </Item>
          </Column>

          <Column>
            <Grid>
              <Column>
                <Item>
                  <ReportLabel htmlFor="ced-weight" text="Weight (kg)" />
                  <ReportInput type="text" name="weight" id="ced-weight" />
                </Item>
              </Column>

              <Column>
                <Item>
                  <ReportLabel htmlFor="ced-height" text="Height (cm)" />
                  <ReportInput type="text" name="height" id="ced-height" />
                </Item>
              </Column>
            </Grid>
          </Column>
        </Grid>
      </ReportForm>
    </Container>
  );
}
