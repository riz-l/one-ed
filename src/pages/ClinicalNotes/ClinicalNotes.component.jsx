// Import: Dependencies
import React, { useEffect } from "react";

// Import: Elements
import { Container } from "./ClinicalNotes.elements";

// Page: ClinicalNotes
export default function ClinicalNotes() {
  // Upon navigation to Home, moves DOM to top of window
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container>
        <h1>Clinical Notes</h1>
      </Container>
    </>
  );
}
