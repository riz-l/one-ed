// Import: Dependencies
import React from "react";

// Import: Elements
import { Container, Heading, Item } from "../../../../globalComponents";

// Import: Components
import { ReportEntry, Text } from "../../../../components";

// SubPage: Presenting
export default function Presenting({ isEntrySlideOpen, setIsEntrySlideOpen }) {
  return (
    <Container>
      <Heading>
        <Text as="h2" heading>
          Presenting Complaint
        </Text>
      </Heading>

      <Item>
        <ReportEntry
          presenting
          type="Damaged Limb"
          details="Right arm has break at elbow joint"
          status="Active"
          slideStatus={isEntrySlideOpen}
          slideToggle={setIsEntrySlideOpen}
        />

        <ReportEntry
          presenting
          type="Fear of Ambulance Travel"
          details="Patient is afraid of travelling in Ambulance"
          status="Active"
          slideStatus={isEntrySlideOpen}
          slideToggle={setIsEntrySlideOpen}
        />
      </Item>
    </Container>
  );
}
