// Import: Dependencies
import React, { useEffect } from "react";

// Import: Elements
import { Container } from "./ViewCAS.elements";

// Page: ViewCAS
export default function ViewCAS({ setSelectedPage }) {
  // Upon navigation to Home, moves DOM to top of window
  // Sets Header text as current page
  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedPage("Patient - View CAS Card");
  }, [setSelectedPage]);

  return (
    <>
      <Container>
        <h1>View CAS Card</h1>
      </Container>
    </>
  );
}
