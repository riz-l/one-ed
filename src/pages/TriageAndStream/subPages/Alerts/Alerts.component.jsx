// Import: Dependencies
import React, { useEffect } from "react";

// Import: Elements
import { Container, Heading, Item } from "../../../../globalComponents";

// Import: Components
import { ReportEntry, Text } from "../../../../components";

// SubPage: Alerts
export default function Alerts({ isEntrySlideOpen, setIsEntrySlideOpen }) {
  // Effect: Upon navigation to Alerts, moves DOM to top of window
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Heading>
        <Text as="h2" heading>
          Alerts
        </Text>
      </Heading>

      <Item>
        <ReportEntry
          alerts
          type="Impairment"
          details="Communication difficulties"
          status="Active"
          slideStatus={isEntrySlideOpen}
          slideToggle={setIsEntrySlideOpen}
        />

        <ReportEntry
          alerts
          type="End of life"
          details="Advance decision in effect"
          status="Active"
          slideStatus={isEntrySlideOpen}
          slideToggle={setIsEntrySlideOpen}
        />
      </Item>
    </Container>
  );
}
