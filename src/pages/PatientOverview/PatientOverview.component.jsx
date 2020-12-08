// Import: Dependencies
import React, { useEffect } from "react";

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
import {
  Container,
  Wrapper,
  ReportContainer,
} from "./PatientOverview.elements";

// Import: Components
import { ReportHeader } from "../../components";

// Page: PatientOverview
export default function PatientOverview() {
  // Upon navigation to Home, moves DOM to top of window
  // Sets Header text as current page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Wrapper>
        {/* Patient Details */}
        <ReportContainer>
          <ReportHeader
            heading="Patient Details"
            subtext="Demographics and contact information"
          >
            <DetailsIcon />
          </ReportHeader>
        </ReportContainer>

        {/* Patient History */}
        <ReportContainer>
          <ReportHeader
            heading="Patient History"
            subtext="Alerts, allergies, medications, etc."
          >
            <HistoryIcon />
          </ReportHeader>
        </ReportContainer>
      </Wrapper>
    </Container>
  );
}
