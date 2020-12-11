// Import: Dependencies
import React, { useState, useEffect } from "react";

// Import: Assets
import { ReactComponent as DetailsIcon } from "../../assets/img/icon/patient-overview.svg";
import { ReactComponent as HistoryIcon } from "../../assets/img/icon/patient-history.svg";
import { ReactComponent as AlertsIcon } from "../../assets/img/icon/alerts.svg";
import { ReactComponent as AllergiesIcon } from "../../assets/img/icon/allergies.svg";
import { ReactComponent as ComplicationsIcon } from "../../assets/img/icon/complications.svg";
import { ReactComponent as DiagnosisIcon } from "../../assets/img/icon/assessments-seen.svg";
import { ReactComponent as FindingsIcon } from "../../assets/img/icon/findings.svg";
import { ReactComponent as PresentingComplaintIcon } from "../../assets/img/icon/presenting-complaint.svg";
import { ReactComponent as ProceduresIcon } from "../../assets/img/icon/procedures.svg";
import { ReactComponent as SymptomsIcon } from "../../assets/img/icon/symptoms.svg";

// Import: Elements
import { Container, Wrapper, ItemWrapper } from "./PatientOverview.elements";

// Import: Components, subPages
import {
  ReportHeader,
  ReportNavigation,
  ReportNavigationItem,
  ReportSection,
} from "../../components";
import {
  Alerts,
  Allergies,
  Complications,
  Details,
  Diagnosis,
  Findings,
  Presenting,
  Procedures,
  Symptoms,
} from "./subPages";

// Page: PatientOverview
export default function PatientOverview() {
  // State: Patient History subPages
  const [showAlerts, setShowAlerts] = useState(false);
  const [showAllergies, setShowAllergies] = useState(false);
  const [showComplications, setShowComplications] = useState(false);
  const [showDiagnosis, setShowDiagnosis] = useState(false);
  const [showFindings, setShowFindings] = useState(false);
  const [showPresenting, setShowPresenting] = useState(false);
  const [showProcedures, setShowProcedures] = useState(false);
  const [showSymptoms, setShowSymptoms] = useState(false);

  // Upon navigation to Home, moves DOM to top of window
  // Sets Header text as current page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // onClick: Render Alerts
  function alertsRender() {
    setShowAllergies(false);
    setShowComplications(false);
    setShowDiagnosis(false);
    setShowFindings(false);
    setShowPresenting(false);
    setShowProcedures(false);
    setShowSymptoms(false);

    setShowAlerts(true);
  }

  // onClick: Render Allergies
  function allergiesRender() {
    setShowAlerts(false);
    setShowComplications(false);
    setShowDiagnosis(false);
    setShowFindings(false);
    setShowPresenting(false);
    setShowProcedures(false);
    setShowSymptoms(false);

    setShowAllergies(true);
  }

  // onClick: Render Complications
  function complicationsRender() {
    setShowAlerts(false);
    setShowAllergies(false);
    setShowDiagnosis(false);
    setShowFindings(false);
    setShowPresenting(false);
    setShowProcedures(false);
    setShowSymptoms(false);

    setShowComplications(true);
  }

  // onClick: Render Diagnosis
  function diagnosisRender() {
    setShowAlerts(false);
    setShowAllergies(false);
    setShowComplications(false);
    setShowFindings(false);
    setShowPresenting(false);
    setShowProcedures(false);
    setShowSymptoms(false);

    setShowDiagnosis(true);
  }

  // onClick: Render Findings
  function findingsRender() {
    setShowAlerts(false);
    setShowAllergies(false);
    setShowComplications(false);
    setShowDiagnosis(false);
    setShowPresenting(false);
    setShowProcedures(false);
    setShowSymptoms(false);

    setShowFindings(true);
  }

  // onClick: Render Presenting
  function presentingRender() {
    setShowAlerts(false);
    setShowAllergies(false);
    setShowComplications(false);
    setShowDiagnosis(false);
    setShowFindings(false);
    setShowProcedures(false);
    setShowSymptoms(false);

    setShowPresenting(true);
  }

  // onClick: Render Procedures
  function proceduresRender() {
    setShowAlerts(false);
    setShowAllergies(false);
    setShowComplications(false);
    setShowDiagnosis(false);
    setShowFindings(false);
    setShowPresenting(false);
    setShowSymptoms(false);

    setShowProcedures(true);
  }

  // onClick: Render Symptoms
  function symptomsRender() {
    setShowAlerts(false);
    setShowAllergies(false);
    setShowComplications(false);
    setShowDiagnosis(false);
    setShowFindings(false);
    setShowPresenting(false);
    setShowProcedures(false);

    setShowSymptoms(true);
  }

  return (
    <Container>
      <Wrapper>
        {/* Patient Details */}
        <ReportSection
          header={
            <ReportHeader
              icon={<DetailsIcon />}
              heading="Patient Details"
              subtext="Demographics and contact information"
            />
          }
          nav={
            <ReportNavigation>
              <ReportNavigationItem isActive>
                <DetailsIcon />
                <span>Details</span>
              </ReportNavigationItem>
            </ReportNavigation>
          }
          content={<Details />}
        />

        {/* Patient History */}
        <ReportSection
          header={
            <ReportHeader
              heading="Patient History"
              subtext="Alerts, allergies, medications, etc."
              icon={<HistoryIcon />}
            />
          }
          nav={
            <ReportNavigation>
              <ItemWrapper onClick={alertsRender}>
                <ReportNavigationItem isActive={showAlerts ? true : false}>
                  <AlertsIcon />
                  <span>Alerts</span>
                </ReportNavigationItem>
              </ItemWrapper>

              <ItemWrapper onClick={allergiesRender}>
                <ReportNavigationItem isActive={showAllergies ? true : false}>
                  <AllergiesIcon />
                  <span>Allergies</span>
                </ReportNavigationItem>
              </ItemWrapper>

              <ItemWrapper onClick={complicationsRender}>
                <ReportNavigationItem
                  isActive={showComplications ? true : false}
                >
                  <ComplicationsIcon />
                  <span>Complications</span>
                </ReportNavigationItem>
              </ItemWrapper>

              <ItemWrapper onClick={diagnosisRender}>
                <ReportNavigationItem isActive={showDiagnosis ? true : false}>
                  <DiagnosisIcon />
                  <span>Diagnosis</span>
                </ReportNavigationItem>
              </ItemWrapper>

              <ItemWrapper onClick={findingsRender}>
                <ReportNavigationItem isActive={showFindings ? true : false}>
                  <FindingsIcon />
                  <span>Findings</span>
                </ReportNavigationItem>
              </ItemWrapper>

              <ItemWrapper onClick={presentingRender}>
                <ReportNavigationItem isActive={showPresenting ? true : false}>
                  <PresentingComplaintIcon />
                  <span>Presenting Complaint</span>
                </ReportNavigationItem>
              </ItemWrapper>

              <ItemWrapper onClick={proceduresRender}>
                <ReportNavigationItem isActive={showProcedures ? true : false}>
                  <ProceduresIcon />
                  <span>Procedures</span>
                </ReportNavigationItem>
              </ItemWrapper>

              <ItemWrapper onClick={symptomsRender}>
                <ReportNavigationItem isActive={showSymptoms ? true : false}>
                  <SymptomsIcon />
                  <span>Symptoms</span>
                </ReportNavigationItem>
              </ItemWrapper>
            </ReportNavigation>
          }
          content={
            showAlerts ? (
              <Alerts />
            ) : showAllergies ? (
              <Allergies />
            ) : showComplications ? (
              <Complications />
            ) : showDiagnosis ? (
              <Diagnosis />
            ) : showFindings ? (
              <Findings />
            ) : showPresenting ? (
              <Presenting />
            ) : showProcedures ? (
              <Procedures />
            ) : showSymptoms ? (
              <Symptoms />
            ) : null
          }
        />
      </Wrapper>
    </Container>
  );
}
