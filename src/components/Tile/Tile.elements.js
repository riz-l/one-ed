// Import: Dependencies
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 240px;
  width: 240px;
  background: #11bac1;
  margin-bottom: 1rem;

  &:nth-last-child() {
    margin-bottom: 0;
  }
`;
