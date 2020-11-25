// Import: Dependencies
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./Home.elements";

// Import: SubPages
import { WardTiles } from "../subPages";

// Page: Home
export default function Home() {
  return (
    <Container>
      <Wrapper>
        <WardTiles />
      </Wrapper>
    </Container>
  );
}
