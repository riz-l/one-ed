// Import: Dependencies
import React from "react";

// Import: Elements
import { Container, Heading, Item } from "../../../../globalComponents";

// Import: Components
import { ReportEntry, Text } from "../../../../components";

// SubPage: Complications
export default function Complications({
  isEntrySlideOpen,
  setIsEntrySlideOpen,
}) {
  return (
    <Container>
      <Heading>
        <Text as="h2" heading>
          Complications
        </Text>
      </Heading>

      <Item>
        <ReportEntry
          complications
          type="Damaged Limb"
          details="Right arm has break at elbow joint"
          status="Active"
          slideStatus={isEntrySlideOpen}
          slideToggle={setIsEntrySlideOpen}
        />

        <ReportEntry
          complications
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
