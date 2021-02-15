// Import: Dependencies
import React, { useState, useEffect } from "react";
import Dexie from "dexie";

// Import: Assets
import { ReactComponent as AlertsIcon } from "../../assets/img/icon/alerts.svg";
import { ReactComponent as AllergiesIcon } from "../../assets/img/icon/allergies.svg";
import { ReactComponent as CedIcon } from "../../assets/img/icon/assessments-ced.svg";
import { ReactComponent as NeuroIcon } from "../../assets/img/icon/assessments-neuro.svg";
import { ReactComponent as PopsIcon } from "../../assets/img/icon/patient-cas.svg";
import { ReactComponent as TriageIcon } from "../../assets/img/icon/assessments-triage.svg";
import { ReactComponent as UrineIcon } from "../../assets/img/icon/assessments-urine.svg";

// Import: Elements
import { Container, Wrapper, ItemWrapper } from "./TriageAndStream.elements";

// Import: Components, subPages
import {
  ReportEntrySlide,
  ReportHeader,
  ReportNavigation,
  ReportNavigationItem,
  ReportSection,
} from "../../components";
import { Alerts, Allergies, Ced, Neuro, Triage, Urine } from "./subPages";

// Page: TriageAndStream
export default function TriageAndStream() {
  // State: isTriageNavOpen, isPopsNavOpen isEntrySlideOpen
  const [isTriageNavOpen, setIsTriageNavOpen] = useState(false);
  const [isPopsNavOpen, setIsPopsNavOpen] = useState(false);
  const [isEntrySlideOpen, setIsEntrySlideOpen] = useState(false);

  // State: Triage and Stream subPages
  const [slideName, setSlideName] = useState("Alerts");
  const [showTriage, setShowTriage] = useState(true);
  const [showAlerts, setShowAlerts] = useState(false);
  const [showAllergies, setShowAllergies] = useState(false);

  // State: Paediatric Observation Priority Score subPages
  const [showCed, setShowCed] = useState(true);
  const [showNeuro, setShowNeuro] = useState(false);
  const [showUrine, setShowUrine] = useState(false);

  // Effect: Upon navigation to TriageAndStream, moves DOM to top of window
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Dexie: database = TASCed, TASUrine, TASNeuro
  const cedDb = new Dexie("TASCed");
  const urineDb = new Dexie("TASUrine");
  const neuroDb = new Dexie("TASNeuro");

  // onClick: Open/close Triage Nav
  function toggleTriageNav() {
    setIsTriageNavOpen((isTriageNavOpen) => !isTriageNavOpen);
  }

  // onClick: Open/close Pops Nav
  function togglePopsNav() {
    setIsPopsNavOpen((isPopsNavOpen) => !isPopsNavOpen);
  }

  // onClick: Render Triage
  function triageRender() {
    setShowAlerts(false);
    setShowAllergies(false);

    setShowTriage(true);
  }

  // onClick: Render Alerts
  function alertsRender() {
    setShowTriage(false);
    setShowAllergies(false);

    setShowAlerts(true);
    setSlideName("Alerts");
  }

  // onClick: Render Allergies
  function allergiesRender() {
    setShowTriage(false);
    setShowAlerts(false);

    setShowAllergies(true);
    setSlideName("Allergies");
  }

  // onClick: Render Ced
  function cedRender() {
    setShowNeuro(false);
    setShowUrine(false);

    setShowCed(true);
  }

  // onClick: Render Neuro
  function neuroRender() {
    setShowCed(false);
    setShowUrine(false);

    setShowNeuro(true);
  }

  // onClick: Render Urine
  function urineRender() {
    setShowCed(false);
    setShowNeuro(false);

    setShowUrine(true);
  }

  return (
    <>
      <Container>
        <Wrapper>
          {/* Triage and Stream */}
          <ReportSection
            header={
              <ReportHeader
                icon={<TriageIcon />}
                heading="Triage and Stream"
                subtext="Chief complaint, obs and prioritisation"
                navToggle={toggleTriageNav}
                navStatus={isTriageNavOpen}
                emergency
              />
            }
            nav={
              <ReportNavigation navStatus={isTriageNavOpen}>
                <ItemWrapper onClick={triageRender}>
                  <ReportNavigationItem isActive={showTriage ? true : false}>
                    <TriageIcon />
                    <span>Triage</span>
                  </ReportNavigationItem>
                </ItemWrapper>

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
              </ReportNavigation>
            }
            content={
              showTriage ? (
                <Triage />
              ) : showAlerts ? (
                <Alerts
                  isEntrySlideOpen={isEntrySlideOpen}
                  setIsEntrySlideOpen={setIsEntrySlideOpen}
                />
              ) : showAllergies ? (
                <Allergies
                  isEntrySlideOpen={isEntrySlideOpen}
                  setIsEntrySlideOpen={setIsEntrySlideOpen}
                />
              ) : null
            }
            navStatus={isTriageNavOpen}
          />

          {/* POPs Score */}
          <ReportSection
            header={
              <ReportHeader
                icon={<PopsIcon />}
                heading="Paediatric Observation Priority Score"
                subtext="CED, neuro, urine obs"
                navToggle={togglePopsNav}
                navStatus={isPopsNavOpen}
              />
            }
            nav={
              <ReportNavigation navStatus={isPopsNavOpen}>
                <ItemWrapper onClick={cedRender}>
                  <ReportNavigationItem isActive={showCed ? true : false}>
                    <CedIcon />
                    <span>CED Obs</span>
                  </ReportNavigationItem>
                </ItemWrapper>

                <ItemWrapper onClick={neuroRender}>
                  <ReportNavigationItem isActive={showNeuro ? true : false}>
                    <NeuroIcon />
                    <span>Neuro Obs</span>
                  </ReportNavigationItem>
                </ItemWrapper>

                <ItemWrapper onClick={urineRender}>
                  <ReportNavigationItem isActive={showUrine ? true : false}>
                    <UrineIcon />
                    <span>Urine Obs</span>
                  </ReportNavigationItem>
                </ItemWrapper>
              </ReportNavigation>
            }
            content={
              showCed ? (
                <Ced db={cedDb} />
              ) : showNeuro ? (
                <Neuro db={neuroDb} />
              ) : showUrine ? (
                <Urine db={urineDb} />
              ) : null
            }
            navStatus={isPopsNavOpen}
          />

          <ReportEntrySlide
            slideStatus={isEntrySlideOpen}
            slideToggle={setIsEntrySlideOpen}
            slideName={slideName}
          />
        </Wrapper>
      </Container>
    </>
  );
}
