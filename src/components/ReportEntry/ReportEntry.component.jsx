// Import: Dependencies
import React from "react";

// Import: Icons
import { MdKeyboardArrowRight as ArrowIcon } from "react-icons/md";

// Import: Elements
import { Container } from "../../globalComponents";
import {
  Wrapper,
  EntryContainer,
  Left,
  Heading,
  Detail,
  Right,
  Status,
  ArrowContainer,
  Arrow,
} from "./ReportEntry.elements";

// Component: ReportEntry
export default function ReportEntry({ themeColor, icon }) {
  return (
    <Container>
      <Wrapper style={{ borderColor: `${themeColor}` }}>
        <EntryContainer>
          <Left>
            <Heading>
              {icon}
              <h3>Impairment</h3>
            </Heading>

            <Detail>
              <p>Communication difficulties</p>
            </Detail>
          </Left>

          <Right>
            <Status>
              <p>Active</p>
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
