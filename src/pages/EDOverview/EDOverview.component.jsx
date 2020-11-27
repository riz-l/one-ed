// Import: Dependencies
import React, { useEffect } from "react";

// Import: Elements
import { Container } from "./EDOverview.elements";

// Page: EDOverview
export default function EDOverview() {
  // Upon navigation to Home, moves DOM to top of window
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container>
        <h1>ED Overview</h1>
      </Container>
    </>
  );
}
