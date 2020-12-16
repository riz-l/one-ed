// Import: Dependencies
import React, { useEffect } from "react";

// Import: Elements
import { Container, Heading, Grid, Column, Item } from "./Triage.elements";

// Import: Components
import { ReportForm, ReportInput, ReportLabel } from "../../../../components";

// SubPage: Triage
export default function Triage() {
  // Effect: Upon navigation to Triage, moves DOM to top of window
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Heading>
        <h2>Triage</h2>
      </Heading>

      <ReportForm>
        <Grid>
          <Column>
            <Item>
              <ReportLabel text="Arrival Date/Time" />
              <ReportInput type="text" width="250px" />
            </Item>

            <Item>
              <ReportLabel text="Triage Date" />
              <ReportInput type="date" width="250px" />
            </Item>

            <Item>
              <ReportLabel text="Triage Time" />
              <ReportInput type="time" width="250px" />
            </Item>

            <Item>
              <ReportLabel text="Triage System" />
              <ReportInput type="text" width="250px" />
            </Item>

            <Item>
              <ReportLabel text="Location" />
              <ReportInput type="text" width="250px" />
            </Item>
          </Column>

          <Column>
            <Item>
              <ReportLabel text="Chief Complaint" />
              <ReportInput type="text" width="250px" />
            </Item>

            <Item>
              <ReportLabel text="Triage Category" />
              <ReportInput type="text" width="250px" />
            </Item>

            <Item>
              <ReportLabel text="Triage By" />
              <ReportInput type="text" width="250px" />
            </Item>
          </Column>
        </Grid>
      </ReportForm>
    </Container>
  );
}
