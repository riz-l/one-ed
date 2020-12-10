// Import: Dependencies
import React from "react";

// Import: Elements
import { Container, Wrapper } from "./Details.elements";

// Import: Components
import { Grid, Column, Item } from "../../globalComponents";
import { ReportForm, ReportInput, ReportLabel } from "../../components";

// SubPage: Details
export default function Details() {
  return (
    <Container>
      <Wrapper>
        <ReportForm>
          <Grid>
            <Column>
              <Item>
                <Item>
                  <ReportLabel text="Name" />
                  <ReportInput type="input" />
                </Item>

                <Item>
                  <ReportLabel text="Date of Birth" />
                  <ReportInput type="input" />
                </Item>

                <Grid>
                  <Column>
                    <Item>
                      <ReportLabel text="Age (Years)" />
                      <ReportInput type="input" />
                    </Item>
                  </Column>

                  <Column>
                    <Item>
                      <ReportLabel text="Gender" />
                      <ReportInput type="input" />
                    </Item>
                  </Column>
                </Grid>

                <Item>
                  <ReportLabel text="NHS No" />
                  <ReportInput type="input" />
                </Item>
              </Item>

              <Item>
                <Item>
                  <ReportLabel text="Contact 1" />
                  <ReportInput type="input" />
                </Item>

                <Item>
                  <ReportLabel text="Contact 2" />
                  <ReportInput type="input" />
                </Item>
              </Item>
            </Column>

            <Column>
              <Item>
                <ReportLabel text="Address" />
                <ReportInput type="input" />
                <ReportInput type="input" />
                <ReportInput type="input" />
                <ReportInput type="input" />
                <ReportInput type="input" />
              </Item>

              <Item>
                <Item>
                  <ReportLabel text="Contact 3" />
                  <ReportInput type="input" />
                </Item>

                <Item>
                  <ReportLabel text="Contact 4" />
                  <ReportInput type="input" />
                </Item>
              </Item>
            </Column>
          </Grid>
        </ReportForm>
      </Wrapper>
    </Container>
  );
}
