// Import: Dependencies
import React, { useState } from "react";

// Import: Elements
import { Container, Heading, Item } from "./Urine.elements";

// Import: Components
import { Dropdown, InputCheckbox, ReportForm } from "../../../../components";

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
          <InputCheckbox
            checked={isNadChecked}
            onChange={() => setIsNadChecked((isNadChecked) => !isNadChecked)}
            name="nad"
            value="nad"
            id="nad"
            text="NAD"
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