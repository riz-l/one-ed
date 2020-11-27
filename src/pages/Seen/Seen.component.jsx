// Import: Dependencies
import React, { useEffect } from "react";

// Import: Elements
import { Container } from "./Seen.elements";

// Page: Seen
export default function Seen() {
  // Upon navigation to Home, moves DOM to top of window
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container>
        <h1>Seen</h1>
      </Container>
    </>
  );
}
