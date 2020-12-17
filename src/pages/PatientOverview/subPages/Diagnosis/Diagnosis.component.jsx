// Import: Dependencies
import React from "react";

// Import: Elements
import { Container, Heading, Item } from "../../../../globalComponents";

// Import: Components
import { ReportEntry } from "../../../../components";

// SubPage: Diagnosis
export default function Diagnosis() {
  return (
    <Container>
      <Heading>
        <h2>Diagnosis</h2>
      </Heading>

      <Item>
        <ReportEntry
          diagnosis
          type="Damaged Limb"
          details="Right arm has break at elbow joint"
          status="Active"
        />

        <ReportEntry
          diagnosis
          type="Fear of Ambulance Travel"
          details="Patient is afraid of travelling in Ambulance"
          status="Active"
        />
      </Item>
    </Container>
  );
}
