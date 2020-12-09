// Import: Dependencies
import React from "react";

// Import: Elements
import {
  Container,
  Report,
  Wrapper,
  Header,
  ContentWrapper,
  Navigation,
  Content,
} from "./ReportSection.elements";

// Component: ReportSection
export default function ReportSection({ header, nav, content }) {
  return (
    <Container>
      <Wrapper>
        <Report>
          <Header>{header}</Header>

          <ContentWrapper>
            <Navigation>{nav}</Navigation>
            <Content>{content}</Content>
          </ContentWrapper>
        </Report>
      </Wrapper>
    </Container>
  );
}
