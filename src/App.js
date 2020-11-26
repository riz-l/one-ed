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
  background-color: #b8c6db;
  background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 74%);
  height: 100vh;
  /* height: 100%; */
  overflow-x: hidden;
  overflow-y: auto;
  width: 100%;
`;
