// Import: Dependencies
import React from "react";

// Import: Icons
import { MdKeyboardArrowRight as ArrowIcon } from "react-icons/md";
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
  themeColor,
  icon,
  type,
  details,
  status,
}) {
  return (
    <Container>
      <Wrapper themeColor={themeColor}>
        <EntryContainer>
          <Left>
            <Heading>
              <Icon themeColor={themeColor}>
                {icon ? icon : <DefaultIcon />}
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

          <ArrowContainer style={{ background: `${themeColor}` }}>
            <Arrow>
              <ArrowIcon />
            </Arrow>
          </ArrowContainer>
        </EntryContainer>
      </Wrapper>
    </Container>
  );
}
