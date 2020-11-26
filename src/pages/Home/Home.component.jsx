// Import: Dependencies
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./Home.elements";

// Import: Components
import { Tile, TileSection } from "../../components";

// Page: Home
export default function Home() {
  return (
    <Container>
      <Wrapper>
        <TileSection title="Ward">
          <Tile text="Emergency Dept. Overview" />
        </TileSection>

        <TileSection title="Patient">
          <Tile text="Patient Overview" />
          <Tile text="View CAS Card" />
          <Tile text="Save and Close Record" />
          <Tile text="Cancel and Close Record" />
        </TileSection>

        <TileSection title="Assessments">
          <Tile text="Triage and Stream" />
          <Tile text="Observations" />
          <Tile text="Seen" />
          <Tile text="Clinical Notes" />
          <Tile text="View Seen" />
        </TileSection>

        <TileSection title="Training">
          <Tile text="Clinical Guidelines" />
        </TileSection>
      </Wrapper>
    </Container>
  );
}
