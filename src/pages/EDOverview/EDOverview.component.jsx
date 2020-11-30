// Import: Dependencies
import React, { useEffect } from "react";

// Import: Elements
import { Container } from "./EDOverview.elements";

// Page: EDOverview
export default function EDOverview({ setSelectedPage }) {
  // Upon navigation to Home, moves DOM to top of window
  // Sets Header text as current page
  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedPage("Ward - ED Overview");
  }, [setSelectedPage]);

  return (
    <>
      <Container>
        <h1>ED Overview</h1>
      </Container>
    </>
  );
}
