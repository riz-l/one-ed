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
export default function ReportSection({
  background,
  header,
  nav,
  content,
  navStatus,
}) {
  return (
    <Container>
      <Wrapper>
        <Report background={background}>
          <Header>{header}</Header>

          <ContentWrapper nav={nav} navStatus={navStatus}>
            <Navigation nav={nav} navStatus={navStatus}>
              {nav}
            </Navigation>
            <Content>{content}</Content>
          </ContentWrapper>
        </Report>
      </Wrapper>
    </Container>
  );
}
