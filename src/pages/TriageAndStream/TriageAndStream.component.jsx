// Import: Dependencies
import React, { useEffect } from "react";

// Import: Elements
import { Container } from "./TriageAndStream.elements";

// Page: TriageAndStream
export default function TriageAndStream() {
  // Upon navigation to Home, moves DOM to top of window
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container>
        <h1>Triage and Stream</h1>
      </Container>
    </>
  );
}
