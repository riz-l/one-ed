// Import: Dependencies
import React from "react";

// Import: Elements
import { Container, Form } from "./ReportForm.elements";

// Component: ReportForm
export default function ReportForm({ children }) {
  return (
    <Container>
      <Form>{children}</Form>
    </Container>
  );
}
