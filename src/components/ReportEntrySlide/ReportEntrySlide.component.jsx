// Import: Dependencies
import React, { useRef, useEffect } from "react";

// Import: Assets
import { ReactComponent as AlertsIcon } from "../../assets/img/icon/alerts.svg";
import { ReactComponent as AllergiesIcon } from "../../assets/img/icon/allergies.svg";
import { ReactComponent as ComplicationsIcon } from "../../assets/img/icon/complications.svg";
import { ReactComponent as DiagnosisIcon } from "../../assets/img/icon/assessments-seen.svg";
import { ReactComponent as FindingsIcon } from "../../assets/img/icon/findings.svg";
import { ReactComponent as PresentingComplaintIcon } from "../../assets/img/icon/presenting-complaint.svg";
import { ReactComponent as ProceduresIcon } from "../../assets/img/icon/procedures.svg";
import { ReactComponent as SymptomsIcon } from "../../assets/img/icon/symptoms.svg";

// Import: Icons
import { AiOutlineCloseSquare as ToggleIcon } from "react-icons/ai";

// Import: Elements
import {
  Container,
  Header,
  Heading,
  Toggle,
  ToggleWrapper,
} from "./ReportEntrySlide.elements";

// Component: ReportEntrySlide
export default function ReportEntrySlide({
  slideName,
  slideStatus,
  slideToggle,
}) {
  // Ref: node
  const node = useRef();

  // Effect: Checks to see if click is inside or outside PatientList
  function useOnClickOutside(node, handler) {
    useEffect(() => {
      const listener = (event) => {
        // If clicking node element or children elements do nothing
        if (!node.current || node.current.contains(event.target)) {
          return;
        }

        handler(event);
      };

      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [node, handler]);
  }

  // If click is outside of PatientList, isPatientListOpen === false
  useOnClickOutside(node, () => slideToggle(false));

  return (
    <Container ref={node} slideStatus={slideStatus}>
      <Header>
        <Heading>
          {slideName === "Alerts" ? (
            <AlertsIcon />
          ) : slideName === "Allergies" ? (
            <AllergiesIcon />
          ) : slideName === "Complications" ? (
            <ComplicationsIcon />
          ) : slideName === "Diagnosis" ? (
            <DiagnosisIcon />
          ) : slideName === "Findings" ? (
            <FindingsIcon />
          ) : slideName === "Presenting" ? (
            <PresentingComplaintIcon />
          ) : slideName === "Procedures" ? (
            <ProceduresIcon />
          ) : slideName === "Symptoms" ? (
            <SymptomsIcon />
          ) : (
            <AlertsIcon />
          )}
          <h2>{slideName}</h2>
        </Heading>

        <ToggleWrapper>
          <Toggle
            onClick={
              slideToggle
                ? () => slideToggle((slideStatus) => !slideStatus)
                : null
            }
          >
            <ToggleIcon />
          </Toggle>
        </ToggleWrapper>
      </Header>
    </Container>
  );
}
