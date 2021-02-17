// Import: Dependencies
import React, { useEffect } from "react";
import styled from "styled-components";

// Import: Elements
import { Container } from "./Seen.elements";

// Page: Seen
export default function Seen() {
  // Upon navigation to Home, moves DOM to top of window
  // Sets Header text as current page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Container>
        <TableWrapper>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeading>Heading One</TableHeading>
                <TableHeading>Heading Two</TableHeading>
                <TableHeading>Heading Three</TableHeading>
                <TableHeading>Heading Four</TableHeading>
                <TableHeading>Heading Five</TableHeading>
                <TableHeading>Heading Six</TableHeading>
                <TableHeading>Heading Seven</TableHeading>
                <TableHeading>Heading Eight</TableHeading>
                <TableHeading>Heading Nine</TableHeading>
                <TableHeading>Heading Ten</TableHeading>
                <TableHeading>Heading Eleven</TableHeading>
                <TableHeading>Heading Twelve</TableHeading>
                <TableHeading>Heading Thirteen</TableHeading>
                <TableHeading>Heading Fourteen</TableHeading>
                <TableHeading>Heading Fifteen</TableHeading>
              </TableRow>
            </TableHead>

            <TableBody>
              <TableRow>
                <TableData>Data One</TableData>
                <TableData>Data Two</TableData>
                <TableData>Data Three</TableData>
                <TableData>Data Four</TableData>
                <TableData>Data Five</TableData>
                <TableData>Data Six</TableData>
                <TableData>Data Seven</TableData>
                <TableData>Data Eight</TableData>
                <TableData>Data Nine</TableData>
                <TableData>Data Ten</TableData>
                <TableData>Data Eleven</TableData>
                <TableData>Data Twelve</TableData>
                <TableData>Data Thirteen</TableData>
                <TableData>Data Fourteen</TableData>
                <TableData>Data Fifteen</TableData>
              </TableRow>
            </TableBody>
          </Table>
        </TableWrapper>
      </Container>
    </>
  );
}

// Element: TableWrapper
const TableWrapper = styled.div`
  overflow-x: auto;
`;

// Element: Table
const Table = styled.table`
  width: 100%;
`;

// Element: TableHead
const TableHead = styled.thead``;

// Element: TableRow
const TableRow = styled.tr``;

// Element: TableHeading
const TableHeading = styled.th`
  background-color: green;
  max-width: 200px;
  min-width: 200px;
  text-align: center;
`;

// Element: TableBody
const TableBody = styled.tbody``;

// Element: TableData
const TableData = styled.td`
  background-color: yellow;
  max-width: 200px;
  min-width: 200px;
  text-align: center;
`;
