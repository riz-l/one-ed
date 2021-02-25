// Import: Dependencies
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: flex-start;
  margin-bottom: 0.8rem;
`;

// Element: Label
export const Label = styled.label``;

// Element: Input
export const Input = styled.input`
  cursor: pointer;
  height: 100%;
  opacity: 0;
  position: absolute;
  width: 100%;
`;

// Element: VisualBox
export const VisualBox = styled.div`
  align-items: center;
  background: ${({ checked }) => (checked ? "#11bac1" : "#d4d4d8")};
  border-radius: 50%;
  content: "";
  cursor: pointer;
  display: flex;
  height: 50px;
  justify-content: center;
  position: relative;
  transition: all 100ms linear;
  width: 50px;

  & svg {
    fill: ${({ checked }) => (checked ? "#f1f1f1" : "#3a3a40")};
    height: 30px;
    transition: all 100ms linear;
    width: 30px;
  }

  &:hover {
    background: ${({ checked }) => (checked ? "#0fa4a9" : "#bfbfc5")};
    transition: all 100ms linear;

    & svg {
      fill: ${({ checked }) => (checked ? "#ffffff" : "#2a2a2e")};
      transition: all 100ms linear;
    }
  }
`;
