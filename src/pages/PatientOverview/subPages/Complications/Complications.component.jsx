// Import: Dependencies
import React from "react";

// Import: Elements
import { Container, Heading, Item } from "../../../../globalComponents";

// Import: Components
import { ReportEntry } from "../../../../components";

// SubPage: Complications
export default function Complications() {
  return (
    <Container>
      <Heading>
        <h2>Complications</h2>
      </Heading>

      <Item>
        <ReportEntry
          complications
          type="Damaged Limb"
          details="Right arm has break at elbow joint"
          status="Active"
        />

        <ReportEntry
          complications
          type="Fear of Ambulance Travel"
          details="Patient is afraid of travelling in Ambulance"
          status="Active"
        />
      </Item>
    </Container>
  );
}
