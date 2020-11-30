// Import: Dependencies
import React, { useEffect } from "react";

// Import: Elements
import {
  Container,
  Wrapper,
  ReportContainer,
} from "./PatientOverview.elements";

// Page: PatientOverview
export default function PatientOverview({ setSelectedPage }) {
  // Upon navigation to Home, moves DOM to top of window
  // Sets Header text as current page
  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedPage("Patient - Patient Overview");
  }, [setSelectedPage]);

  return (
    <Container>
      <Wrapper>
        <ReportContainer>
          <p>Test 1</p>
        </ReportContainer>

        <ReportContainer>
          <p>Test 2</p>
        </ReportContainer>
      </Wrapper>
    </Container>
  );
}
