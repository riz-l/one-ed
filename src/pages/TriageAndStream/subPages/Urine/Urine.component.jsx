// Import: Dependencies
import React, { useState } from "react";

// Import: Elements
import { Container, Heading, Item } from "./Urine.elements";

// Import: Components
import { Dropdown, Checkbox, ReportForm } from "../../../../components";

// SubPage: Urine
export default function Urine() {
  // State: isNadChecked
  const [isNadChecked, setIsNadChecked] = useState(false);

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
        <h2>Urine Observations</h2>
      </Heading>

      <ReportForm>
        <Item>
          <Checkbox
            checked={isNadChecked}
            onChange={() => setIsNadChecked((isNadChecked) => !isNadChecked)}
            text="NAD"
            value={isNadChecked}
            name="nad"
            id="nad"
          />
        </Item>

        <Item style={{ marginTop: "4rem" }}>
          <Dropdown
            htmlFor="pro"
            left
            labelText="Pro"
            options={dropdownOptions}
          />
        </Item>

        <Item style={{ marginTop: "4rem" }}>
          <Dropdown htmlFor="pro" labelText="Pro" options={dropdownOptions} />
        </Item>
      </ReportForm>
    </Container>
  );
}
