// Import: Dependencies
import React from "react";

// Import: Elements
import { Column, Container, Grid } from "./Details.elements";

// Import: Components
import { ReportForm, ReportInput, ReportLabel } from "../../components";

// SubPage: Details
export default function Details() {
  return (
    <Container>
      <ReportForm>
        <Grid>
          <Column>
            <ReportLabel text="Name" />
            <ReportInput type="text" placeholder="Name" />

            <ReportLabel text="Name" />
            <ReportInput type="text" placeholder="Name" />

            <Grid>
              <Column>
                <ReportLabel text="Name" />
                <ReportInput type="text" placeholder="Name" />
              </Column>

              <Column style={{ marginLeft: "1rem" }}>
                <ReportLabel text="Name" />
                <ReportInput type="text" placeholder="Name" />
              </Column>
            </Grid>

            <ReportLabel text="Name" />
            <ReportInput type="text" placeholder="Name" />

            <ReportLabel text="Name" />
            <ReportInput type="text" placeholder="Name" />

            <ReportLabel text="Name" />
            <ReportInput type="text" placeholder="Name" />
          </Column>

          <Column>
            <ReportLabel text="Test" />
            <ReportInput type="text" placeholder="Test" />
            <ReportInput type="text" placeholder="Test" />
            <ReportInput type="text" placeholder="Test" />
            <ReportInput type="text" placeholder="Test" />

            <ReportLabel text="Name" />
            <ReportInput type="text" placeholder="Name" />

            <ReportLabel text="Name" />
            <ReportInput type="text" placeholder="Name" />
          </Column>
        </Grid>
      </ReportForm>
    </Container>
  );
}
