// Import: Dependencies
import React, { useState, useEffect } from "react";

// Import: Assets
import { ReactComponent as TriageIcon } from "../../assets/img/icon/assessments-triage.svg";
import { ReactComponent as AlertsIcon } from "../../assets/img/icon/alerts.svg";
import { ReactComponent as AllergiesIcon } from "../../assets/img/icon/allergies.svg";

// Import: Elements
import { Container, Wrapper, ItemWrapper } from "./TriageAndStream.elements";

// Import: Components, subPages
import {
  ReportHeader,
  ReportNavigation,
  ReportNavigationItem,
  ReportSection,
} from "../../components";
import { Alerts, Allergies, Triage } from "./subPages";

// Page: TriageAndStream
export default function TriageAndStream() {
  // State: isNavOpen
  const [isNavOpen, setIsNavOpen] = useState(false);

  // State: Triage and Stream subPages
  const [showTriage, setShowTriage] = useState(true);
  const [showAlerts, setShowAlerts] = useState(false);
  const [showAllergies, setShowAllergies] = useState(false);

  // State: windowWidth
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Effect: Checks and updates inner window width
  // ... Upon navigation to Home, moves DOM to top of window
  // ... Sets Header text as current page
  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);
    };

    window.addEventListener("resize", updateWindowDimensions);

    window.scrollTo(0, 0);
  }, []);

  // onClick: Open/close Nav
  function toggleNav() {
    setIsNavOpen((isNavOpen) => !isNavOpen);
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
  }

  // onClick: Render Allergies
  function allergiesRender() {
    setShowTriage(false);
    setShowAlerts(false);

    setShowAllergies(true);
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
                navToggle={toggleNav}
                navStatus={isNavOpen}
              />
            }
            nav={
              <ReportNavigation navStatus={isNavOpen}>
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
                <Alerts />
              ) : showAllergies ? (
                <Allergies />
              ) : null
            }
            navStatus={isNavOpen}
          />

          {/* Empty */}
          {windowWidth > 1098 ? (
            <ReportSection background="transparent" />
          ) : null}
        </Wrapper>
      </Container>
    </>
  );
}
