// Import: Dependencies
import React, { useEffect } from "react";

// Import: Elements
import { Container } from "./ClinicalNotes.elements";

// Page: ClinicalNotes
export default function ClinicalNotes({ setSelectedPage }) {
  // Upon navigation to Home, moves DOM to top of window
  // Sets Header text as current page
  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedPage("Assessments - Clinical Notes");
  }, [setSelectedPage]);

  return (
    <>
      <Container>
        <h1>Clinical Notes</h1>
      </Container>
    </>
  );
}
