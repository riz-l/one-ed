// Import: Dependencies
import React from "react";

// Import: Elements
import {
  Container,
  PrimaryHeader,
  SecondaryHeader,
  HeaderWrapper,
  Icon,
} from "./ReportHeader.elements";

// Component: ReportHeader
export default function ReportHeader({ children, heading, subtext }) {
  return (
    <Container>
      <PrimaryHeader>
        {children && <Icon>{children}</Icon>}

        <HeaderWrapper>
          <h2>{heading}</h2>
          <span>{subtext}</span>
        </HeaderWrapper>
      </PrimaryHeader>
      <SecondaryHeader></SecondaryHeader>
    </Container>
  );
}
