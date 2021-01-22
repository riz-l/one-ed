// Import: Dependencies
import React, { useState } from "react";

// Import: Elements
import { Container, Heading, Item } from "./Urine.elements";

// Import: Components
import { InputCheckbox, ReportForm } from "../../../../components";

// SubPage: Urine
export default function Urine() {
  // State: isNadChecked
  const [isNadChecked, setIsNadChecked] = useState(false);

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
      </ReportForm>
    </Container>
  );
}
