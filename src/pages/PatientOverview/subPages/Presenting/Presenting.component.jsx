// Import: Dependencies
import React from "react";

// Import: Elements
import { Container, Heading, Item } from "../../../../globalComponents";

// Import: Components
import { ReportEntry } from "../../../../components";

// SubPage: Presenting
export default function Presenting() {
  return (
    <Container>
      <Heading>
        <h2>Presenting Complaint</h2>
      </Heading>

      <Item>
        <ReportEntry
          presenting
          type="Damaged Limb"
          details="Right arm has break at elbow joint"
          status="Active"
        />

        <ReportEntry
          presenting
          type="Fear of Ambulance Travel"
          details="Patient is afraid of travelling in Ambulance"
          status="Active"
        />
      </Item>
    </Container>
  );
}
