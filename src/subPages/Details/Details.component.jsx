// Import: Dependencies
import React, { useState, useEffect } from "react";

// Import: Elements
import { Column, Container, Grid, Item } from "./Details.elements";

// Import: Components
import { ReportForm, ReportInput, ReportLabel } from "../../components";

// SubPage: Details
export default function Details() {
  // State: windowWidth
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Effect: Checks and updates inner window width
  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);
    };

    window.addEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <Container>
      <ReportForm>
        <Grid>
          <Column>
            <Item>
              <Item>
                <ReportLabel text="Name" />
                <ReportInput type="text" width="250px" />
              </Item>

              <Item>
                <ReportLabel text="Date of Birth" />
                <ReportInput type="text" width="250px" />
              </Item>

              <Grid>
                <Column>
                  <Item>
                    <ReportLabel text="Age (Years)" />
                    <ReportInput type="text" width="80px" />
                  </Item>
                </Column>

                <Column
                  style={windowWidth > 1378 ? { marginLeft: "1rem" } : null}
                >
                  <Item>
                    <ReportLabel text="Gender" />
                    <ReportInput type="text" width="150px" />
                  </Item>
                </Column>
              </Grid>

              <Item>
                <ReportLabel text="NHS No" />
                <ReportInput type="text" width="250px" />
              </Item>
            </Item>

            <Item>
              <Item>
                <ReportLabel text="Contact 1" />
                <ReportInput type="text" width="250px" />
              </Item>

              <Item>
                <ReportLabel text="Contact 2" />
                <ReportInput type="text" width="250px" />
              </Item>
            </Item>
          </Column>

          <Column>
            <Item>
              <ReportLabel text="Address" />
              <ReportInput type="text" width="250px" />
              <ReportInput type="text" width="250px" />
              <ReportInput type="text" width="250px" />
              <ReportInput type="text" width="250px" />
              <ReportInput type="text" width="250px" />
            </Item>

            <Item>
              <Item>
                <ReportLabel text="Contact 3" />
                <ReportInput type="text" width="250px" />
              </Item>

              <Item>
                <ReportLabel text="Contact 4" />
                <ReportInput type="text" width="250px" />
              </Item>
            </Item>
          </Column>
        </Grid>
      </ReportForm>
    </Container>
  );
}