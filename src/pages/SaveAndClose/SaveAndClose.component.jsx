// Import: Dependencies
import React, { useEffect } from "react";

// Import: Elements
import { Container } from "./SaveAndClose.elements";

// Page: SaveAndClose
export default function SaveAndClose({ setSelectedPage }) {
  // Upon navigation to Home, moves DOM to top of window
  // Sets Header text as current page
  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedPage("Patient - Save and Close Record");
  }, [setSelectedPage]);

  return (
    <>
      <Container>
        <h1>Save and Close Record</h1>
      </Container>
    </>
  );
}