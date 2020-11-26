// Import: Dependencies
import React from "react";

// Import: Elements
import { Container } from "./Tile.elements";

// Component: Tile
export default function Tile({ icon, alt, text }) {
  return (
    <Container>
      <img src={icon} alt={alt} />
      <h3>{text}</h3>
    </Container>
  );
}
