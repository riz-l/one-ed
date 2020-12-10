// Import: Dependencies
import React from "react";

// Import: Elements
import { Container, Input } from "./ReportInput.elements";

// Component: ReportInput
export default function ReportInput({ type, id, value, name }) {
  return (
    <Container>
      <Input type={type} id={id} value={value} name={name} />
    </Container>
  );
}
