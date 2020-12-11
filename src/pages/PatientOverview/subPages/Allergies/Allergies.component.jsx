// Import: Dependencies
import React from "react";

// Import: Icons
import { GiMedicines as AllergiesIcon } from "react-icons/gi";

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
          themeColor="#ffaf85"
          icon={<AllergiesIcon />}
          type="Drug Allergy"
          details="Extreme reaction to paracetamol"
          status="Active"
        />

        <ReportEntry
          themeColor="#ffaf85"
          icon={<AllergiesIcon />}
          type="Food Allergy"
          details="Mild reaction to lactose"
          status="Active"
        />
      </Item>
    </Container>
  );
}
