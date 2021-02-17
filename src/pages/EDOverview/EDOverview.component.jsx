// Import: Dependencies
import React, { useState, useEffect } from "react";

// Import: Assets
import { ReactComponent as EDIcon } from "../../assets/img/icon/ward-ed.svg";
import { ReactComponent as PatientsIcon } from "../../assets/img/icon/patient-overview.svg";
import { ReactComponent as SeenIcon } from "../../assets/img/icon/assessments-seen.svg";
import { ReactComponent as TriageIcon } from "../../assets/img/icon/assessments-triage.svg";

// Import: Elements
import { Container, Wrapper, ItemWrapper } from "./EDOverview.elements";

// Import: Components, subPages
import {
  ReportHeader,
  ReportNavigation,
  ReportNavigationItem,
  ReportSection,
} from "../../components";
import {} from "./subPages";

// Page: EDOverview
export default function EDOverview() {
  // State: isOverviewNavOpen
  const [isOverviewNavOpen, setIsOverviewNavOpen] = useState(false);

  // Upon navigation to Home, moves DOM to top of window
  // Sets Header text as current page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // onClick: Open/close Overview Nav
  function toggleOverviewNav() {
    setIsOverviewNavOpen((isOverviewNavOpen) => !isOverviewNavOpen);
  }

  return (
    <Container>
      <Wrapper>
        <ReportSection
          header={
            <ReportHeader
              icon={<EDIcon />}
              heading="Emergency Department Overview"
              subtext="Patient details, status and breach info"
              navToggle={toggleOverviewNav}
              navStatus={isOverviewNavOpen}
              emergency
            />
          }
          nav={
            <ReportNavigation navStatus={isOverviewNavOpen}>
              <ItemWrapper>
                <ReportNavigationItem isActive>
                  <PatientsIcon />
                  <span>All Patients</span>
                </ReportNavigationItem>
              </ItemWrapper>

              <ItemWrapper>
                <ReportNavigationItem>
                  <TriageIcon />
                  <span>To Be Triaged</span>
                </ReportNavigationItem>
              </ItemWrapper>

              <ItemWrapper>
                <ReportNavigationItem>
                  <SeenIcon />
                  <span>To Be Seen</span>
                </ReportNavigationItem>
              </ItemWrapper>
            </ReportNavigation>
          }
          content={<p>In progress...</p>}
          navStatus={isOverviewNavOpen}
        />

        <ReportSection />
      </Wrapper>
    </Container>
  );
}
