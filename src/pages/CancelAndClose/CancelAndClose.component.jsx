// Import: Dependencies
import React, { useEffect } from "react";

// Import: Elements
import { Container } from "./CancelAndClose.elements";

// Page: CancelAndClose
export default function CancelAndClose() {
  // Upon navigation to Home, moves DOM to top of window
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container>
        <h1>Cancel and Close Record</h1>
      </Container>
    </>
  );
}
