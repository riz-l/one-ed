// Import: Dependencies
import React, { useState } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

// Import: Components, Pages
import { ProtectedRoute } from "./components";
import {
  CancelAndClose,
  ClinicalGuidelines,
  ClinicalNotes,
  ComponentTest,
  Dashboard,
  EDOverview,
  Login,
  Observations,
  PatientOverview,
  SaveAndClose,
  Seen,
  TriageAndStream,
  Unauthorized,
  ViewCAS,
  ViewSeen,
} from "./pages";
import { Header, PatientList } from "./components";

// Component: App
export default function App() {
  // State: isLoggedIn
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isPatientListOpen, setIsPatientListOpen] = useState(false);

  // Sets isLoggedIn === true
  const handleLogin = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  // Sets isLoggedIn === false
  const handleLogout = (e) => {
    e.preventDefault();
    setIsLoggedIn(false);
  };

  return (
    <>
      {isLoggedIn ? (
        <>
          <Redirect to="/dashboard" />
        </>
      ) : null}

      {!isLoggedIn && <Redirect to="/" />}

      {isLoggedIn && (
        <>
          <Header
            setIsPatientListOpen={setIsPatientListOpen}
            handleLogout={handleLogout}
          />
          <PatientList
            isPatientListOpen={isPatientListOpen}
            setIsPatientListOpen={setIsPatientListOpen}
          />
        </>
      )}

      <Switch>
        {/* Login */}
        <Route
          exact
          path="/"
          handleLogin={handleLogin}
          render={(props) => (
            <Login
              {...props}
              isLoggedIn={isLoggedIn.toString()}
              handleLogin={handleLogin}
            />
          )}
        />

        {/* Home */}
        <ProtectedRoute
          exact
          path="/dashboard"
          isLoggedIn={isLoggedIn}
          component={Dashboard}
        />

        {/* 403: Unauthorized */}
        <Route exact path="/unauthorized" component={Unauthorized} />

        {/* Dashboard */}
        <Route exact path="/dashboard">
          <Dashboard />
        </Route>

        {/* Ward - ED Overview */}
        <Route exact path="/dashboard/ward/ed-overview">
          <EDOverview />
        </Route>

        {/* Patient - Patient Overview */}
        <Route exact path="/dashboard/patient/patient-overview">
          <PatientOverview />
        </Route>

        {/* Patient - View CAS Card */}
        <Route exact path="/dashboard/patient/view-cas-card">
          <ViewCAS />
        </Route>

        {/* Patient - Save and Close Record */}
        <Route exact path="/dashboard/patient/save-and-close-record">
          <SaveAndClose />
        </Route>

        {/* Patient - Cancel and Close Record */}
        <Route exact path="/dashboard/patient/cancel-and-close-record">
          <CancelAndClose />
        </Route>

        {/* Assessments - Triage and Stream */}
        <Route exact path="/dashboard/assessments/triage-and-stream">
          <TriageAndStream />
        </Route>

        {/* Assessments - Observations */}
        <Route exact path="/dashboard/assessments/observations">
          <Observations />
        </Route>

        {/* Assessments - Seen */}
        <Route exact path="/dashboard/assessments/seen">
          <Seen />
        </Route>

        {/* Assessments - Clinical Notes */}
        <Route exact path="/dashboard/assessments/clinical-notes">
          <ClinicalNotes />
        </Route>

        {/* Assessments - View Seen */}
        <Route exact path="/dashboard/assessments/view-seen">
          <ViewSeen />
        </Route>

        {/* Training - Clinical Guidelines */}
        <Route exact path="/dashboard/training/clinical-guidelines">
          <ClinicalGuidelines />
        </Route>

        {/* Test - Component Test */}
        <Route exact path="/dashboard/test/component-test">
          <ComponentTest />
        </Route>
      </Switch>
    </>
  );
}
