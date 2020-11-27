// Import: Dependencies
import React, { useEffect } from "react";

// Import: Elements
import { Container } from "./PatientOverview.elements";

// Page: PatientOverview
export default function PatientOverview() {
  // Upon navigation to Home, moves DOM to top of window
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container>
        <h1>Patient Overview</h1>
      </Container>
    </>
  );
}
