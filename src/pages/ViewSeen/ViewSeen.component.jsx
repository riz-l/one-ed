// Import: Dependencies
import React, { useEffect } from "react";

// Import: Elements
import { Container } from "./ViewSeen.elements";

// Page: ViewSeen
export default function ViewSeen() {
  // Upon navigation to Home, moves DOM to top of window
  // Sets Header text as current page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container>
        <h1>View Seen</h1>
      </Container>
    </>
  );
}
