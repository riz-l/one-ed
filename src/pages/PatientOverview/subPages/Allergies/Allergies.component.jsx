// Import: Dependencies
import React from "react";

// Import: Elements
import { Container, Heading, Item } from "../../../../globalComponents";

// Import: Components
import { ReportEntry } from "../../../../components";

// SubPage: Allergies
export default function Allergies() {
  return (
    <Container>
      <Heading>
        <h2>Allergies</h2>
      </Heading>

      <Item>
        <ReportEntry
          allergies
          type="Drug Allergy"
          details="Extreme reaction to paracetamol"
          status="Active"
        />

        <ReportEntry
          allergies
          type="Food Allergy"
          details="Mild reaction to lactose"
          status="Active"
        />
      </Item>
    </Container>
  );
}
