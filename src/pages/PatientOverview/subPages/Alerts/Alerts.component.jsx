// Import: Dependencies
import React from "react";

// Import: Icons
import { FiAlertTriangle as AlertIcon } from "react-icons/fi";

// Import: Elements
import { Container, Heading, Item } from "../../../../globalComponents";

// Import: Components
import { ReportEntry } from "../../../../components";

// SubPage: Alerts
export default function Alerts() {
  return (
    <Container>
      <Heading>
        <h2>Alerts</h2>
      </Heading>

      <Item>
        <ReportEntry
          themeColor="#ff6347"
          icon={<AlertIcon />}
          type="Impairment"
          details="Communication difficulties"
          status="Active"
        />

        <ReportEntry
          themeColor="#ff6347"
          icon={<AlertIcon />}
          type="End of life"
          details="Advance decision in effect"
          status="Active"
        />

        <ReportEntry
          themeColor="#8b5fbf"
          icon={<AlertIcon />}
          type="End of life"
          details="Advance decision in effect"
          status="Inactive"
        />

        <ReportEntry />
      </Item>
    </Container>
  );
}
