// Import: Dependencies
import React from "react";

// Import: Elements
import { Container, Heading, Item } from "../../../../globalComponents";

// Import: Components
import { ReportEntry, Text } from "../../../../components";

// SubPage: Allergies
export default function Allergies({ isEntrySlideOpen, setIsEntrySlideOpen }) {
  return (
    <Container>
      <Heading>
        <Text as="h2" heading>
          Allergies
        </Text>
      </Heading>

      <Item>
        <ReportEntry
          allergies
          type="Drug Allergy"
          details="Extreme reaction to paracetamol"
          status="Active"
          slideStatus={isEntrySlideOpen}
          slideToggle={setIsEntrySlideOpen}
        />

        <ReportEntry
          allergies
          type="Food Allergy"
          details="Mild reaction to lactose"
          status="Active"
          slideStatus={isEntrySlideOpen}
          slideToggle={setIsEntrySlideOpen}
        />
      </Item>
    </Container>
  );
}
