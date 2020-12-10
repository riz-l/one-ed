// Import: Dependencies
import React from "react";

// Import: Elements
import { Container, Form } from "./ReportForm.elements";

// Component: ReportForm
export default function ReportForm({ onSubmit, children }) {
  return (
    <Container>
      <Form onSubmit={onSubmit}>{children}</Form>
    </Container>
  );
}
