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
import { Alerts, Details } from "../../subPages";

// Page: PatientOverview
export default function PatientOverview() {
  // State: showAlerts
  const [showAlerts, setShowAlerts] = useState(false);

  // Upon navigation to Home, moves DOM to top of window
  // Sets Header text as current page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              <ReportNavigationItem>
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
              <ItemWrapper onClick={() => setShowAlerts(true)}>
                <ReportNavigationItem>
                  <AlertsIcon />
                  <span>Alerts</span>
                </ReportNavigationItem>
              </ItemWrapper>

              <ReportNavigationItem>
                <AllergiesIcon />
                <span>Allergies</span>
              </ReportNavigationItem>

              <ReportNavigationItem>
                <ComplicationsIcon />
                <span>Complications</span>
              </ReportNavigationItem>

              <ReportNavigationItem>
                <DiagnosisIcon />
                <span>Diagnosis</span>
              </ReportNavigationItem>

              <ReportNavigationItem>
                <FindingsIcon />
                <span>Findings</span>
              </ReportNavigationItem>

              <ReportNavigationItem>
                <PresentingComplaintIcon />
                <span>Presenting Complaint</span>
              </ReportNavigationItem>

              <ReportNavigationItem>
                <ProceduresIcon />
                <span>Procedures</span>
              </ReportNavigationItem>

              <ReportNavigationItem>
                <SymptomsIcon />
                <span>Symptoms</span>
              </ReportNavigationItem>
            </ReportNavigation>
          }
          content={showAlerts && <Alerts />}
        />
      </Wrapper>
    </Container>
  );
}
