// Import: Dependencies
import React, { useEffect } from "react";

// Import: Assets
import { ReactComponent as TriageIcon } from "../../assets/img/icon/assessments-triage.svg";

// Import: Elements
import { Container, Wrapper } from "./ViewCAS.elements";

// Import: Components
import { ReportHeader, ReportSection } from "../../components";

// Page: ViewCAS
export default function ViewCAS() {
  // Effect: Upon navigation to PatientOverview, moves DOM to top of window
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Wrapper>
        <ReportSection
          header={
            <ReportHeader
              icon={<TriageIcon />}
              heading="Triage and Stream"
              subtext="Chief complaint, obs and prioritisation"
            />
          }
          content={<p>View CAS Card</p>}
        />
      </Wrapper>
    </Container>
  );
}
