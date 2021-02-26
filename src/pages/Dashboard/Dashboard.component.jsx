// Import: Dependencies
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

// Import: Assets
import WardEDIcon from "../../assets/img/icon/ward-ed.svg";
import PatientOverviewIcon from "../../assets/img/icon/patient-patient.svg";
import PatientCASIcon from "../../assets/img/icon/patient-cas.svg";
import PatientSaveIcon from "../../assets/img/icon/patient-save.svg";
import PatientCancelIcon from "../../assets/img/icon/patient-cancel.svg";
import AssessmentsTriageIcon from "../../assets/img/icon/assessments-triage.svg";
import AssessmentsObservationsIcon from "../../assets/img/icon/assessments-observations.svg";
import AssessmentsSeenIcon from "../../assets/img/icon/assessments-seen.svg";
import AssessmentsClinicalIcon from "../../assets/img/icon/assessments-clinical.svg";
import AssessmentsViewIcon from "../../assets/img/icon/assessments-view.svg";
import TrainingClinicalIcon from "../../assets/img/icon/training-clinical.svg";
// import TestComponentIcon from "../../assets/img/icon/test-component.svg";

// Import: Elements
import { Container, Wrapper } from "./Dashboard.elements";

// Import: Components
import { Tile, TileSection } from "../../components";

// Page: Dashboard
export default function Dashboard() {
  // Upon navigation to Home, moves DOM to top of window
  // Sets Header text as current page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Wrapper>
        <TileSection title="Ward">
          <Link to="/dashboard/ward/ed-overview">
            <Tile
              text="ED Overview"
              icon={WardEDIcon}
              alt="Hospital with 24 hour availability"
            />
          </Link>
        </TileSection>

        <TileSection title="Patient">
          <Link to="/dashboard/patient/patient-overview">
            <Tile
              text="Patient Overview"
              icon={PatientOverviewIcon}
              alt="Patient with a heart beat lifeline passing through"
            />
          </Link>

          <Link to="/dashboard/patient/view-cas-card">
            <Tile
              text="View CAS Card"
              icon={PatientCASIcon}
              alt="Medical report"
            />
          </Link>

          <Link to="/dashboard/patient/save-and-close-record">
            <Tile
              text="Save and Close Record"
              icon={PatientSaveIcon}
              alt="Tick with a circled border"
            />
          </Link>

          <Link to="/dashboard/patient/cancel-and-close-record">
            <Tile
              text="Cancel and Close Record"
              icon={PatientCancelIcon}
              alt="Cross with a circled border"
            />
          </Link>
        </TileSection>

        <TileSection title="Assessments">
          <Link to="/dashboard/assessments/triage-and-stream">
            <Tile
              text="Triage and Stream"
              icon={AssessmentsTriageIcon}
              alt="Two people agreeing from either side of a table"
            />
          </Link>

          <Link to="/dashboard/assessments/observations">
            <Tile
              text="Observations"
              icon={AssessmentsObservationsIcon}
              alt="An ECG lifeline displayed on a screen"
            />
          </Link>

          <Link to="/dashboard/assessments/seen">
            <Tile text="Seen" icon={AssessmentsSeenIcon} alt="Stethoscope" />
          </Link>

          <Link to="/dashboard/assessments/clinical-notes">
            <Tile
              text="Clinical Notes"
              icon={AssessmentsClinicalIcon}
              alt="Medical report on a clipboard with a pen"
            />
          </Link>

          <Link to="/dashboard/assessments/view-seen">
            <Tile
              text="View Seen"
              icon={AssessmentsViewIcon}
              alt="Medical report"
            />
          </Link>
        </TileSection>

        <TileSection title="Training">
          <Link to="/dashboard/training/clinical-guidelines">
            <Tile
              text="Clinical Guidelines"
              icon={TrainingClinicalIcon}
              alt="Instruction booklet"
            />
          </Link>
        </TileSection>

        {/* <TileSection title="Test">
          <Link to="/dashboard/test/component-test">
            <Tile
              text="Component Test"
              icon={TestComponentIcon}
              alt="Instruction booklet"
            />
          </Link>
        </TileSection> */}
      </Wrapper>
    </Container>
  );
}
