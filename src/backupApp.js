// Import: Dependencies
import React, { useState } from "react";
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
import { Header, PatientList } from "./components";

// Component: App
export default function App() {
  //State: isPatientListOpen
  const [isPatientListOpen, setIsPatientListOpen] = useState(false);

  return (
    <>
      <Header setIsPatientListOpen={setIsPatientListOpen} />
      <PatientList
        isPatientListOpen={isPatientListOpen}
        setIsPatientListOpen={setIsPatientListOpen}
      />

      <Container>
        <Switch>
          {/* Dashboard */}
          <Route path="/" exact>
            <Dashboard />
          </Route>

          {/* Ward - ED Overview */}
          <Route path="/ward/ed-overview">
            <EDOverview />
          </Route>

          {/* Patient - Patient Overview */}
          <Route path="/patient/patient-overview">
            <PatientOverview />
          </Route>

          {/* Patient - View CAS Card */}
          <Route path="/patient/view-cas-card">
            <ViewCAS />
          </Route>

          {/* Patient - Save and Close Record */}
          <Route path="/patient/save-and-close-record">
            <SaveAndClose />
          </Route>

          {/* Patient - Cancel and Close Record */}
          <Route path="/patient/cancel-and-close-record">
            <CancelAndClose />
          </Route>

          {/* Assessments - Triage and Stream */}
          <Route path="/assessments/triage-and-stream">
            <TriageAndStream />
          </Route>

          {/* Assessments - Observations */}
          <Route path="/assessments/observations">
            <Observations />
          </Route>

          {/* Assessments - Seen */}
          <Route path="/assessments/seen">
            <Seen />
          </Route>

          {/* Assessments - Clinical Notes */}
          <Route path="/assessments/clinical-notes">
            <ClinicalNotes />
          </Route>

          {/* Assessments - View Seen */}
          <Route path="/assessments/view-seen">
            <ViewSeen />
          </Route>

          {/* Training - Clinical Guidelines */}
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
