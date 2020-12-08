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
  //State = selectedPage, isPatientListOpen
  const [selectedPage, setSelectedPage] = useState("");
  const [isPatientListOpen, setIsPatientListOpen] = useState(false);

  return (
    <>
      <Header
        selectedPage={selectedPage}
        setIsPatientListOpen={setIsPatientListOpen}
      />
      <PatientList isPatientListOpen={isPatientListOpen} />

      <Container>
        <Switch>
          {/* Dashboard */}
          <Route path="/" exact>
            <Dashboard setSelectedPage={setSelectedPage} />
          </Route>

          {/* Ward - ED Overview */}
          <Route path="/ward/ed-overview">
            <EDOverview setSelectedPage={setSelectedPage} />
          </Route>

          {/* Patient - Patient Overview */}
          <Route path="/patient/patient-overview">
            <PatientOverview setSelectedPage={setSelectedPage} />
          </Route>

          {/* Patient - View CAS Card */}
          <Route path="/patient/view-cas-card">
            <ViewCAS setSelectedPage={setSelectedPage} />
          </Route>

          {/* Patient - Save and Close Record */}
          <Route path="/patient/save-and-close-record">
            <SaveAndClose setSelectedPage={setSelectedPage} />
          </Route>

          {/* Patient - Cancel and Close Record */}
          <Route path="/patient/cancel-and-close-record">
            <CancelAndClose setSelectedPage={setSelectedPage} />
          </Route>

          {/* Assessments - Triage and Stream */}
          <Route path="/assessments/triage-and-stream">
            <TriageAndStream setSelectedPage={setSelectedPage} />
          </Route>

          {/* Assessments - Observations */}
          <Route path="/assessments/observations">
            <Observations setSelectedPage={setSelectedPage} />
          </Route>

          {/* Assessments - Seen */}
          <Route path="/assessments/seen">
            <Seen setSelectedPage={setSelectedPage} />
          </Route>

          {/* Assessments - Clinical Notes */}
          <Route path="/assessments/clinical-notes">
            <ClinicalNotes setSelectedPage={setSelectedPage} />
          </Route>

          {/* Assessments - View Seen */}
          <Route path="/assessments/view-seen">
            <ViewSeen setSelectedPage={setSelectedPage} />
          </Route>

          {/* Training - Clinical Guidelines */}
          <Route path="/training/clinical-guidelines">
            <ClinicalGuidelines setSelectedPage={setSelectedPage} />
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
