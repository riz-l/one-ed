// Import: Dependencies
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  align-items: center;
  display: flex;
  height: auto;
  justify-content: flex-start;
  margin-bottom: 1rem;
`;

// Element: Input
export const Input = styled.input`
  border: 2px solid #dfdfe2;
  padding: 0.4rem 1rem;
  transition: all 100ms linear;

  &:hover {
    box-shadow: 0 0 5px #7cf0f4;
    transition: all 100ms linear;
  }

  &:focus {
    border: 2px solid #bfbfc5;
    box-shadow: 0 0 5px #a1f4f7;
    outline: none !important;
    transition: all 100ms linear;
  }
`;
