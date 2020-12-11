// Import: Dependencies
import React from "react";

// Import: Elements
import { Container, Heading, Item } from "../../../../globalComponents";

// Import: Components
import { ReportEntry } from "../../../../components";

// SubPage: Alerts
export default function Alerts() {
  return (
    <Container>
      <Heading>
        <h2>Alerts</h2>
      </Heading>

      <Item>
        <ReportEntry />
      </Item>
    </Container>
  );
}
