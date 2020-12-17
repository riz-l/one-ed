// Import: Dependencies
import React from "react";

// Import: Assets
import { ReactComponent as PatientItemIcon } from "../../assets/img/icon/list-patient.svg";

// Import: Elements
import {
  Container,
  IconContainer,
  Icon,
  ContentWrapper,
  DetailsContainer,
  NameItem,
  DetailItem,
  StatusContainer,
} from "./PatientListItem.elements";

// Component: PatientListItem
export default function PatientListItem() {
  return (
    <Container>
      <IconContainer>
        <Icon>
          <PatientItemIcon />
        </Icon>
      </IconContainer>

      <ContentWrapper>
        <DetailsContainer>
          <NameItem>
            <h2>Firstname</h2>
            <h2>Surname</h2>
          </NameItem>

          <DetailItem>
            <p>Call Sign</p>
            <p>Department &#62; Department</p>
          </DetailItem>

          <DetailItem>
            <p>Latest: 30/11/2020 15:20</p>
            <p>Reported Condition</p>
          </DetailItem>
        </DetailsContainer>

        <StatusContainer>
          <p>2456623 mins</p>
        </StatusContainer>
      </ContentWrapper>
    </Container>
  );
}
