// Import: Dependencies
import React from "react";

// Import: Elements
import { Container } from "./Tile.elements";

// Component: Tile
export default function Tile({ icon, alt, title }) {
  return (
    <Container>
      <img src={icon} alt={alt} />
      <h3>{title}</h3>
    </Container>
  );
}
