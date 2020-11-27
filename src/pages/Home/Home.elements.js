// Import: Dependencies
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  background: transparent;
  height: 100%;
  width: 100%;
`;

// Element: Wrapper
export const Wrapper = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: center;
  height: 100%;
  margin: auto;
  width: 95%;

  @media screen and (max-width: 1098px) {
    align-items: center;
    flex-direction: column;
    width: 85%;
  }
`;
