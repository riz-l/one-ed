// Import: Dependencies
import React, { useEffect } from "react";

// Import: Elements
import { Container } from "./PatientOverview.elements";

// Page: PatientOverview
export default function PatientOverview({ setSelectedPage }) {
  // Upon navigation to Home, moves DOM to top of window
  // Sets Header text as current page
  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedPage("Patient - Patient Overview");
  }, [setSelectedPage]);

  return (
    <>
      <Container>
        <h1>Patient Overview</h1>
      </Container>
    </>
  );
}
