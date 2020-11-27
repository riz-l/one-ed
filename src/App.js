// Import: Dependencies
import React from "react";
import styled from "styled-components/macro";
import { Switch, Route } from "react-router-dom";

// Import: Pages, Components
import {
  CancelAndClose,
  ClinicalGuidelines,
  ClinicalNotes,
  Dashboard,
  EDOverview,
  Observations,
  PatientOverview,
  SaveAndClose,
  Seen,
  TriageAndStream,
  ViewCAS,
  ViewSeen,
} from "./pages";
import { Header } from "./components";

// Component: App
export default function App() {
  return (
    <>
      <Header />

      <Container>
        <Switch>
          {/* Dashboard */}
          <Route path="/" exact>
            <Dashboard />
          </Route>

          {/* Ward */}
          <Route path="/ward/ed-overview">
            <EDOverview />
          </Route>

          {/* Patient */}
          <Route path="/patient/patient-overview">
            <PatientOverview />
          </Route>

          <Route path="/patient/view-cas-card">
            <ViewCAS />
          </Route>

          <Route path="/patient/save-and-close-record">
            <SaveAndClose />
          </Route>

          <Route path="/patient/cancel-and-close-record">
            <CancelAndClose />
          </Route>

          {/* Assessments */}
          <Route path="/assessments/triage-and-stream">
            <TriageAndStream />
          </Route>

          <Route path="/assessments/observations">
            <Observations />
          </Route>

          <Route path="/assessments/seen">
            <Seen />
          </Route>

          <Route path="/assessments/clinical-notes">
            <ClinicalNotes />
          </Route>

          <Route path="/assessments/view-seen">
            <ViewSeen />
          </Route>

          {/* Training */}
          <Route path="/training/clinical-guidelines">
            <ClinicalGuidelines />
          </Route>
        </Switch>
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
