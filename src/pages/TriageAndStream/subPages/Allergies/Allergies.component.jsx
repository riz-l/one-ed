// Import: Dependencies
import React, { useEffect } from "react";

// Import: Elements
import { Container, Heading, Item } from "../../../../globalComponents";

// Import: Components
import { ReportEntry, Text } from "../../../../components";

// SubPage: Allergies
export default function Allergies({ isEntrySlideOpen, setIsEntrySlideOpen }) {
  // Effect: Upon navigation to Allergies, moves DOM to top of window
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
