// Import: Dependencies
import React, { useState } from "react";

// Import: Elements
import { Column, Container, Grid, Heading, Item } from "./Neuro.elements";

// Import: Components
import { Checkbox, Dropdown, ReportForm, Text } from "../../../../components";

// SubPage: Neuro
export default function Neuro() {
  // State: checkboxValue, dropdownValue
  const [checkboxValue, setCheckboxValue] = useState(false);
  const [dropdownValue, setDropdownValue] = useState("");

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

  // ... used for checkbox inputs
  const handleDropdownValues = (e) => {
    setDropdownValue(e.target.value);
  };

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
                onChange={handleDropdownValues}
                options={dropdownOptions}
                value={dropdownValue}
                width="250px"
              />
            </Item>

            <Item>
              <Dropdown
                htmlFor="verbal"
                labelText="Verbal"
                onChange={handleDropdownValues}
                options={dropdownOptions}
                value={dropdownValue}
                width="250px"
              />
            </Item>

            <Item>
              <Dropdown
                htmlFor="motor"
                labelText="Motor"
                onChange={handleDropdownValues}
                options={dropdownOptions}
                value={dropdownValue}
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
                    checked={checkboxValue}
                    onChange={() =>
                      setCheckboxValue((checkboxValue) => !checkboxValue)
                    }
                    text="Equal"
                    value={checkboxValue}
                    name="equal"
                    id="equal"
                  />
                </Item>
              </Column>

              <Column>
                <Item>
                  <Checkbox
                    checked={checkboxValue}
                    onChange={() =>
                      setCheckboxValue((checkboxValue) => !checkboxValue)
                    }
                    text="Unequal"
                    value={checkboxValue}
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
                onChange={handleDropdownValues}
                options={dropdownOptions}
                value={dropdownValue}
                width="250px"
              />
            </Item>

            <Item>
              <Dropdown
                htmlFor="leftPupilReaction"
                labelText="Left Pupil Reaction"
                onChange={handleDropdownValues}
                options={dropdownOptions}
                value={dropdownValue}
                width="250px"
              />
            </Item>
          </Column>

          <Column>
            <Item>
              <Dropdown
                htmlFor="rightPupilSize"
                labelText="Right Pupil Size (mm)"
                onChange={handleDropdownValues}
                options={dropdownOptions}
                value={dropdownValue}
                width="250px"
              />
            </Item>

            <Item>
              <Dropdown
                htmlFor="rightPupilReaction"
                labelText="Right Pupil Reaction"
                onChange={handleDropdownValues}
                options={dropdownOptions}
                value={dropdownValue}
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
                onChange={handleDropdownValues}
                options={dropdownOptions}
                value={dropdownValue}
                width="250px"
              />
            </Item>

            <Item>
              <Dropdown
                htmlFor="leftLeg"
                labelText="Left Leg"
                onChange={handleDropdownValues}
                options={dropdownOptions}
                value={dropdownValue}
                width="250px"
              />
            </Item>
          </Column>

          <Column>
            <Item>
              <Dropdown
                htmlFor="rightArm"
                labelText="Right Arm"
                onChange={handleDropdownValues}
                options={dropdownOptions}
                value={dropdownValue}
                width="250px"
              />
            </Item>

            <Item>
              <Dropdown
                htmlFor="rightLeg"
                labelText="Right Leg"
                onChange={handleDropdownValues}
                options={dropdownOptions}
                value={dropdownValue}
                width="250px"
              />
            </Item>
          </Column>
        </Grid>
      </ReportForm>
    </Container>
  );
}
