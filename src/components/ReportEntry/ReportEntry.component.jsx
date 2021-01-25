// Import: Dependencies
import React from "react";

// Import: Icons
import { MdKeyboardArrowRight as ArrowIcon } from "react-icons/md";
import { GoAlert as AlertsIcon } from "react-icons/go";
import { GiMedicines as AllergiesIcon } from "react-icons/gi";
import { FaBandAid as ComplicationsIcon } from "react-icons/fa";
import { RiStethoscopeFill as DiagnosisIcon } from "react-icons/ri";
import { FaSearch as FindingsIcon } from "react-icons/fa";
import { FaUserInjured as PresentingIcon } from "react-icons/fa";
import { FaUserNurse as ProceduresIcon } from "react-icons/fa";
import { FaBed as SymptomsIcon } from "react-icons/fa";
import { BiPlusMedical as DefaultIcon } from "react-icons/bi";

// Import: Elements
import { Container } from "../../globalComponents";
import {
  Wrapper,
  EntryContainer,
  Left,
  Heading,
  Icon,
  Detail,
  Right,
  Status,
  ArrowContainer,
  Arrow,
} from "./ReportEntry.elements";

// Component: ReportEntry
export default function ReportEntry({
  alerts,
  allergies,
  complications,
  diagnosis,
  findings,
  presenting,
  procedures,
  slideStatus,
  slideToggle,
  symptoms,
  themeColor,
  icon,
  type,
  details,
  status,
}) {
  return (
    <Container>
      <Wrapper
        onClick={
          slideToggle ? () => slideToggle((slideStatus) => !slideStatus) : null
        }
        alerts={alerts}
        allergies={allergies}
        complications={complications}
        diagnosis={diagnosis}
        findings={findings}
        presenting={presenting}
        procedures={procedures}
        symptoms={symptoms}
        themeColor={themeColor}
      >
        <EntryContainer>
          <Left>
            <Heading>
              <Icon
                alerts={alerts}
                allergies={allergies}
                complications={complications}
                diagnosis={diagnosis}
                findings={findings}
                presenting={presenting}
                procedures={procedures}
                symptoms={symptoms}
                themeColor={themeColor}
              >
                {alerts ? (
                  <AlertsIcon />
                ) : allergies ? (
                  <AllergiesIcon />
                ) : complications ? (
                  <ComplicationsIcon />
                ) : diagnosis ? (
                  <DiagnosisIcon />
                ) : findings ? (
                  <FindingsIcon />
                ) : presenting ? (
                  <PresentingIcon />
                ) : procedures ? (
                  <ProceduresIcon />
                ) : symptoms ? (
                  <SymptomsIcon />
                ) : icon ? (
                  icon
                ) : (
                  <DefaultIcon />
                )}
              </Icon>
              <h3>{type ? type : "Type"}</h3>
            </Heading>

            <Detail>
              <p>{details ? details : "Details"}</p>
            </Detail>
          </Left>

          <Right>
            <Status>
              <p>{status ? status : "Status"}</p>
            </Status>
          </Right>

          <ArrowContainer
            alerts={alerts}
            allergies={allergies}
            complications={complications}
            diagnosis={diagnosis}
            findings={findings}
            presenting={presenting}
            procedures={procedures}
            symptoms={symptoms}
            style={{ background: `${themeColor}` }}
          >
            <Arrow>
              <ArrowIcon />
            </Arrow>
          </ArrowContainer>
        </EntryContainer>
      </Wrapper>
    </Container>
  );
}
