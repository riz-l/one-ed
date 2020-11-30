// Import: Dependencies
import React, { useEffect } from "react";

// Import: Assets
import DetailsHeader from "../../assets/img/header/patient-details.jpg";
import HistoryHeader from "../../assets/img/header/patient-history.jpg";
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
import {
  Container,
  Wrapper,
  ReportContainer,
  ReportHeader,
  IconContainer,
  FirstHeaderRow,
  HeaderText,
  SecondHeaderRow,
  Navigation,
  NavigationItem,
} from "./PatientOverview.elements";

// Page: PatientOverview
export default function PatientOverview({ setSelectedPage }) {
  // Upon navigation to Home, moves DOM to top of window
  // Sets Header text as current page
  useEffect(() => {
    window.scrollTo(0, 0);
    setSelectedPage("Patient - Patient Overview");
  }, [setSelectedPage]);

  return (
    <Container>
      <Wrapper>
        <ReportContainer>
          <ReportHeader>
            <IconContainer>
              <DetailsIcon />
            </IconContainer>

            <FirstHeaderRow imgSrc={DetailsHeader}>
              <HeaderText>
                <h2>Patient Details</h2>
                <p>Patient demographics and contact information</p>
              </HeaderText>
            </FirstHeaderRow>

            <SecondHeaderRow>
              <Navigation>
                <NavigationItem>
                  <DetailsIcon />
                  <p>Patient Details</p>
                </NavigationItem>
              </Navigation>
            </SecondHeaderRow>
          </ReportHeader>
        </ReportContainer>

        <ReportContainer>
          <ReportHeader>
            <IconContainer>
              <HistoryIcon />
            </IconContainer>

            <FirstHeaderRow imgSrc={HistoryHeader}>
              <HeaderText>
                <h2>Patient History</h2>
                <p>Alerts, allergies and medications, etc.</p>
              </HeaderText>
            </FirstHeaderRow>

            <SecondHeaderRow>
              <Navigation>
                <NavigationItem>
                  <AlertsIcon />
                  <p>Alerts</p>
                </NavigationItem>

                <NavigationItem>
                  <AllergiesIcon />
                  <p>Allergies</p>
                </NavigationItem>

                <NavigationItem>
                  <ComplicationsIcon />
                  <p>Complications</p>
                </NavigationItem>

                <NavigationItem>
                  <DiagnosisIcon />
                  <p>Diagnosis</p>
                </NavigationItem>

                <NavigationItem>
                  <FindingsIcon />
                  <p>Findings</p>
                </NavigationItem>

                <NavigationItem>
                  <PresentingComplaintIcon />
                  <p>Presenting Complaint</p>
                </NavigationItem>

                <NavigationItem>
                  <ProceduresIcon />
                  <p>Procedures</p>
                </NavigationItem>

                <NavigationItem>
                  <SymptomsIcon />
                  <p>Symptoms</p>
                </NavigationItem>
              </Navigation>
            </SecondHeaderRow>
          </ReportHeader>
        </ReportContainer>
      </Wrapper>
    </Container>
  );
}
