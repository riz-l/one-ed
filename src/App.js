// Import: Dependencies
import React from "react";
import styled from "styled-components/macro";

// Import: Pages, Components
import { Home } from "./pages";
import { Header } from "./components";

// Component: App
export default function App() {
  return (
    <>
      <Header />

      <Container>
        <Home />
      </Container>
    </>
  );
}

// Element: Container
const Container = styled.main`
  height: auto;
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
`;
