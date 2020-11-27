// Import: Dependencies
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  align-items: flex-start;
  display: flex;
  flex: 1;
  flex-direction: column;
  height: auto;
  justify-content: center;
  margin: 2rem 0;
  width: 100%;

  & h2 {
    color: #2a2a2e;
  }
`;

// Element: Wrapper
export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: flex-start;
  margin-top: 1rem;
  width: 100%;
`;
