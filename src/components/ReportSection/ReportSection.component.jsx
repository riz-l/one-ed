// Import: Dependencies
import React from "react";

// Import: Elements
import {
  Container,
  Report,
  Wrapper,
  Header,
  Content,
  Navigation,
} from "./ReportSection.elements";

// Component: ReportSection
export default function ReportSection({ header, nav }) {
  return (
    <Container>
      <Wrapper>
        <Report>
          <Header>{header}</Header>

          <Content>
            <Navigation>{nav}</Navigation>
          </Content>
        </Report>
      </Wrapper>
    </Container>
  );
}
