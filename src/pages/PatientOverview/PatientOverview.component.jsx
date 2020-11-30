// Import: Dependencies
import React, { useEffect } from "react";

// Import: Assets
import DetailsHeader from "../../assets/img/header/patient-details.jpg";
import HistoryHeader from "../../assets/img/header/patient-history.jpg";
import { ReactComponent as DetailsIcon } from "../../assets/img/icon/patient-overview.svg";

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
            <SecondHeaderRow></SecondHeaderRow>
          </ReportHeader>
        </ReportContainer>

        <ReportContainer>
          <ReportHeader>
            <IconContainer>
              <DetailsIcon />
            </IconContainer>

            <FirstHeaderRow imgSrc={HistoryHeader}>
              <HeaderText>
                <h2>Patient History</h2>
                <p>Alerts, allergies and medications, etc.</p>
              </HeaderText>
            </FirstHeaderRow>
            <SecondHeaderRow></SecondHeaderRow>
          </ReportHeader>
        </ReportContainer>
      </Wrapper>
    </Container>
  );
}
