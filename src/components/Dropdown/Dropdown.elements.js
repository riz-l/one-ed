// Import: Dependencies
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  align-items: ${({ left }) => (left ? "center" : "flex-start")};
  display: flex;
  flex-direction: ${({ left }) => (left ? "row" : "column")};
  justify-content: center;
  margin-bottom: 0.8rem;
`;

// Element: Label
export const Label = styled.label`
  font-size: 1rem;
  margin-bottom: ${({ left }) => (left ? "0" : "8px")};
  margin-right: ${({ left }) => (left ? "0.8rem" : "0")};
`;

// Element: Select
export const Select = styled.select`
  border: 2px solid #dfdfe2;
  cursor: pointer;
  font-size: 1rem;
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

// Element: Option
export const Option = styled.option`
  cursor: pointer;
  font-size: 1rem;
  padding: 0.4rem 1rem;
`;
