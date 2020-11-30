// Import: Dependencies
import React from "react";

// Import: Assets
import { ReactComponent as PatientIcon } from "../../assets/img/icon/list-patient.svg";

// Import: Elements
import {
  Container,
  Header,
  Heading,
  ItemWrapper,
} from "./PatientList.elements";

// Import: Components
import { PatientListItem } from "../index";

// Component: PatientList
export default function PatientList({ isPatientListOpen }) {
  return (
    <Container isPatientListOpen={isPatientListOpen}>
      <Header>
        <Heading>
          <PatientIcon />
          <h2>
            Patient List <span>(15)</span>
          </h2>
        </Heading>
      </Header>

      <ItemWrapper>
        <PatientListItem />
        <PatientListItem />
        <PatientListItem />
        <PatientListItem />
        <PatientListItem />
        <PatientListItem />
        <PatientListItem />
      </ItemWrapper>
    </Container>
  );
}
