// Import: Dependencies
import React from "react";

// Import: Elements
import { Container, Heading, Item } from "../../../../globalComponents";

// Import: Components
import { ReportEntry, Text } from "../../../../components";

// SubPage: Findings
export default function Findings({ isEntrySlideOpen, setIsEntrySlideOpen }) {
  return (
    <Container>
      <Heading>
        <Text as="h2" heading>
          Findings
        </Text>
      </Heading>

      <Item>
        <ReportEntry
          findings
          type="Damaged Limb"
          details="Right arm has break at elbow joint"
          status="Active"
          slideStatus={isEntrySlideOpen}
          slideToggle={setIsEntrySlideOpen}
        />

        <ReportEntry
          findings
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
