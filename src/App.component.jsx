// Import: Dependencies
import React from "react";

// Import: Elements
import { Container } from "./App.elements";

// Import: Pages, Components
import { Home } from "./pages";
import { Header } from "./components";

// Component: App
export default function App() {
  return (
    <Container>
      <Header />
      <Home />
    </Container>
  );
}
