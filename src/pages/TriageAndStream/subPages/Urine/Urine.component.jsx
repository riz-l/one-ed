// Import: Dependencies
import React, { useState } from "react";

// Import: Elements
import { Column, Container, Grid, Heading, Item } from "./Urine.elements";

// Import: Components
import { Dropdown, Checkbox, ReportForm } from "../../../../components";

// SubPage: Urine
export default function Urine() {
  // State: isNadChecked
  const [isNadChecked, setIsNadChecked] = useState(false);
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
        <h2>Urine Observations</h2>
      </Heading>

      <ReportForm>
        <Grid>
          <Column>
            <Item>
              <Checkbox
                checked={isNadChecked}
                onChange={() =>
                  setIsNadChecked((isNadChecked) => !isNadChecked)
                }
                text="NAD"
                value={isNadChecked}
                name="nad"
                id="nad"
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
                onChange={handleDropdownValues}
                options={dropdownOptions}
                value={dropdownValue}
                width="250px"
              />
            </Item>

            <Item>
              <Dropdown
                htmlFor="bld"
                labelText="Bld"
                onChange={handleDropdownValues}
                options={dropdownOptions}
                value={dropdownValue}
                width="250px"
              />
            </Item>

            <Item>
              <Dropdown
                htmlFor="glu"
                labelText="Glu"
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
                htmlFor="leu"
                labelText="Leu"
                onChange={handleDropdownValues}
                options={dropdownOptions}
                value={dropdownValue}
                width="250px"
              />
            </Item>

            <Item>
              <Dropdown
                htmlFor="nit"
                labelText="Nit"
                onChange={handleDropdownValues}
                options={dropdownOptions}
                value={dropdownValue}
                width="250px"
              />
            </Item>

            <Item>
              <Dropdown
                htmlFor="ket"
                labelText="Ket"
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
