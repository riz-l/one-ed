// Import: Dependencies
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  height: 100%;
  max-height: 100%;
  overflow-y: auto;
  width: 100%;
`;

// Element: Grid
export const Grid = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  margin: auto;
  width: 100%;

  @media screen and (max-width: 1378px) {
    flex-direction: column;
  }
`;

// Element: Column
export const Column = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  width: 100%;
`;

// Element: Item
export const Item = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: center;
`;
