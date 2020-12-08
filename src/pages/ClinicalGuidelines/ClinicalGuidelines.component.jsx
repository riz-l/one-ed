// Import: Dependencies
import React, { useEffect } from "react";

// Import: Elements
import { Container } from "./ClinicalGuidelines.elements";

// Page: ClinicalGuidelines
export default function ClinicalGuidelines() {
  // Upon navigation to Home, moves DOM to top of window
  // Sets Header text as current page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container>
        <h1>Clinical Guidelines</h1>
      </Container>
    </>
  );
}
