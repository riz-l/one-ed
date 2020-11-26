// Import: Dependencies
import React from "react";

// Import: Assets
import WardEDIcon from "../../assets/img/icon/ward-ed.svg";
import PatientOverviewIcon from "../../assets/img/icon/patient-overview.svg";
import PatientCASIcon from "../../assets/img/icon/patient-cas.svg";
import PatientSaveIcon from "../../assets/img/icon/patient-save.svg";
import PatientCancelIcon from "../../assets/img/icon/patient-cancel.svg";
import AssessmentsTriageIcon from "../../assets/img/icon/assessments-triage.svg";
import AssessmentsObservationsIcon from "../../assets/img/icon/assessments-observations.svg";
import AssessmentsSeenIcon from "../../assets/img/icon/assessments-seen.svg";
import AssessmentsClinicalIcon from "../../assets/img/icon/assessments-clinical.svg";
import AssessmentsViewIcon from "../../assets/img/icon/assessments-view.svg";
import TrainingClinicalIcon from "../../assets/img/icon/training-clinical.svg";

// Import: Elements
import { Container, Wrapper } from "./Home.elements";

// Import: Components
import { Tile, TileSection } from "../../components";

// Page: Home
export default function Home() {
  return (
    <Container>
      <Wrapper>
        <TileSection title="Ward">
          <Tile
            text="ED Overview"
            icon={WardEDIcon}
            alt="Hospital with 24 hour availability"
          />
        </TileSection>

        <TileSection title="Patient">
          <Tile
            text="Patient Overview"
            icon={PatientOverviewIcon}
            alt="Patient with a heart beat lifeline passing through"
          />
          <Tile
            text="View CAS Card"
            icon={PatientCASIcon}
            alt="Medical report"
          />
          <Tile
            text="Save and Close Record"
            icon={PatientSaveIcon}
            alt="Tick with a circled border"
          />
          <Tile
            text="Cancel and Close Record"
            icon={PatientCancelIcon}
            alt="Cross with a circled border"
          />
        </TileSection>

        <TileSection title="Assessments">
          <Tile
            text="Triage and Stream"
            icon={AssessmentsTriageIcon}
            alt="Two people agreeing from either side of a table"
          />
          <Tile
            text="Observations"
            icon={AssessmentsObservationsIcon}
            alt="An ECG lifeline displayed on a screen"
          />
          <Tile text="Seen" icon={AssessmentsSeenIcon} alt="Stethoscope" />
          <Tile
            text="Clinical Notes"
            icon={AssessmentsClinicalIcon}
            alt="Medical report on a clipboard with a pen"
          />
          <Tile
            text="View Seen"
            icon={AssessmentsViewIcon}
            alt="Medical report"
          />
        </TileSection>

        <TileSection title="Training">
          <Tile
            text="Clinical Guidelines"
            icon={TrainingClinicalIcon}
            alt="Instruction booklet"
          />
        </TileSection>
      </Wrapper>
    </Container>
  );
}
