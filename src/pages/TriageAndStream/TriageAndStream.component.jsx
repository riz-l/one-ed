// Import: Dependencies
import React, { useEffect } from "react";

// Import: Elements
import { Container } from "./TriageAndStream.elements";

// Page: TriageAndStream
export default function TriageAndStream({ setSelectedPage }) {
  // Upon navigation to Home, moves DOM to top of window
  // Sets Header text as current page
  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedPage("Assessments - Triage and Stream");
  }, [setSelectedPage]);

  return (
    <>
      <Container>
        <h1>Triage and Stream</h1>
      </Container>
    </>
  );
}
