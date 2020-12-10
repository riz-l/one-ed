// Import: Dependencies
import React from "react";

// Import: Elements
import { Container, Label } from "./ReportLabel.elements";

// Component: ReportLabel
export default function ReportLabel({ htmlFor, text }) {
  return (
    <Container>
      <Label htmlFor={htmlFor}>{text}</Label>
    </Container>
  );
}
