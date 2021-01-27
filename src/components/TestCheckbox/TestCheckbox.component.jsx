// Import: Dependencies
import React from "react";

// Import: Elements
import { Container, Label, Checkbox } from "./TestCheckbox.elements";

// Component: TestCheckbox
export default function TestCheckbox({ checked, onChange, text }) {
  return (
    <>
      <Container>
        <Label>
          <Checkbox type="checkbox" checked={checked} onChange={onChange} />

          <span>{text}</span>
        </Label>
      </Container>
    </>
  );
}
