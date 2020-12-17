// Import: Dependencies
import React from "react";

// Import: Elements
import { Container, Heading, Item } from "../../../../globalComponents";

// Import: Components
import { ReportEntry } from "../../../../components";

// SubPage: Findings
export default function Findings() {
  return (
    <Container>
      <Heading>
        <h2>Findings</h2>
      </Heading>

      <Item>
        <ReportEntry
          findings
          type="Damaged Limb"
          details="Right arm has break at elbow joint"
          status="Active"
        />

        <ReportEntry
          findings
          type="Fear of Ambulance Travel"
          details="Patient is afraid of travelling in Ambulance"
          status="Active"
        />
      </Item>
    </Container>
  );
}
