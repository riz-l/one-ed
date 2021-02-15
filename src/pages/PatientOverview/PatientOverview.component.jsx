// Import: Dependencies
import React, { useState, useEffect } from "react";
import Dexie from "dexie";

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
  ReportEntrySlide,
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
  // State: isDetailsNavOpen, isHistoryNavOpen, isEntrySlideOpen
  const [isDetailsNavOpen, setIsDetailsNavOpen] = useState(false);
  const [isHistoryNavOpen, setIsHistoryNavOpen] = useState(false);
  const [isEntrySlideOpen, setIsEntrySlideOpen] = useState(false);

  // State: Patient History subPages
  const [slideName, setSlideName] = useState("Alerts");
  const [showAlerts, setShowAlerts] = useState(true);
  const [showAllergies, setShowAllergies] = useState(false);
  const [showComplications, setShowComplications] = useState(false);
  const [showDiagnosis, setShowDiagnosis] = useState(false);
  const [showFindings, setShowFindings] = useState(false);
  const [showPresenting, setShowPresenting] = useState(false);
  const [showProcedures, setShowProcedures] = useState(false);
  const [showSymptoms, setShowSymptoms] = useState(false);

  // Effect: Upon navigation to PatientOverview, moves DOM to top of window
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // onClick: Open/close Details Nav
  function toggleDetailsNav() {
    setIsDetailsNavOpen((isDetailsNavOpen) => !isDetailsNavOpen);
  }

  // onClick: Open/close History Nav
  function toggleHistoryNav() {
    setIsHistoryNavOpen((isHistoryNavOpen) => !isHistoryNavOpen);
  }

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
    setSlideName("Alerts");
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
    setSlideName("Allergies");
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
    setSlideName("Complications");
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
    setSlideName("Diagnosis");
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
    setSlideName("Findings");
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
    setSlideName("Presenting Complaint");
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
    setSlideName("Procedures");
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
    setSlideName("Symptoms");
  }

  // Dexie: database = PODetails
  const detailsDb = new Dexie("PODetails");

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
              navToggle={toggleDetailsNav}
              navStatus={isDetailsNavOpen}
              notes
            />
          }
          nav={
            <ReportNavigation navStatus={isDetailsNavOpen}>
              <ReportNavigationItem isActive>
                <DetailsIcon />
                <span>Details</span>
              </ReportNavigationItem>
            </ReportNavigation>
          }
          content={<Details db={detailsDb} />}
          navStatus={isDetailsNavOpen}
        />

        {/* Patient History */}
        <ReportSection
          header={
            <ReportHeader
              heading="Patient History"
              subtext="Alerts, allergies, medications, etc."
              icon={<HistoryIcon />}
              navToggle={toggleHistoryNav}
              navStatus={isHistoryNavOpen}
            />
          }
          nav={
            <ReportNavigation navStatus={isHistoryNavOpen}>
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
              <Alerts
                isEntrySlideOpen={isEntrySlideOpen}
                setIsEntrySlideOpen={setIsEntrySlideOpen}
              />
            ) : showAllergies ? (
              <Allergies
                isEntrySlideOpen={isEntrySlideOpen}
                setIsEntrySlideOpen={setIsEntrySlideOpen}
              />
            ) : showComplications ? (
              <Complications
                isEntrySlideOpen={isEntrySlideOpen}
                setIsEntrySlideOpen={setIsEntrySlideOpen}
              />
            ) : showDiagnosis ? (
              <Diagnosis
                isEntrySlideOpen={isEntrySlideOpen}
                setIsEntrySlideOpen={setIsEntrySlideOpen}
              />
            ) : showFindings ? (
              <Findings
                isEntrySlideOpen={isEntrySlideOpen}
                setIsEntrySlideOpen={setIsEntrySlideOpen}
              />
            ) : showPresenting ? (
              <Presenting
                isEntrySlideOpen={isEntrySlideOpen}
                setIsEntrySlideOpen={setIsEntrySlideOpen}
              />
            ) : showProcedures ? (
              <Procedures
                isEntrySlideOpen={isEntrySlideOpen}
                setIsEntrySlideOpen={setIsEntrySlideOpen}
              />
            ) : showSymptoms ? (
              <Symptoms
                isEntrySlideOpen={isEntrySlideOpen}
                setIsEntrySlideOpen={setIsEntrySlideOpen}
              />
            ) : null
          }
          navStatus={isHistoryNavOpen}
        />

        <ReportEntrySlide
          slideStatus={isEntrySlideOpen}
          slideToggle={setIsEntrySlideOpen}
          slideName={slideName}
        />
      </Wrapper>
    </Container>
  );
}
