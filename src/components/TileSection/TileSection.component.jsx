// Import: Dependencies
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./TileSection.elements";

// Component: TileSection
export default function TileSection({ title, children }) {
  return (
    <Container>
      <h2>{title}</h2>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
}
