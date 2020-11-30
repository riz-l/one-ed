// Import: Dependencies
import React, { useEffect } from "react";

// Import: Elements
import { Container } from "./Observations.elements";

// Page: Observations
export default function Observations({ setSelectedPage }) {
  // Upon navigation to Home, moves DOM to top of window
  // Sets Header text as current page
  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedPage("Assessments - Observations");
  }, [setSelectedPage]);

  return (
    <>
      <Container>
        <h1>Observations</h1>
      </Container>
    </>
  );
}
