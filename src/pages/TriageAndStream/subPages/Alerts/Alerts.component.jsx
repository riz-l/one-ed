// Import: Dependencies
import React, { useEffect } from "react";

// Import: Elements
import { Container, Heading, Item } from "../../../../globalComponents";

// Import: Components
import { ReportEntry } from "../../../../components";

// SubPage: Alerts
export default function Alerts({ isEntrySlideOpen, setIsEntrySlideOpen }) {
  // Effect: Upon navigation to Alerts, moves DOM to top of window
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Heading>
        <h2>Alerts</h2>
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
