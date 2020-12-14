// Import: Dependencies
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  align-items: center;
  background: ${({ isActive }) => (isActive ? "#bfbfc5" : "#d4d4d8")};
  border-bottom: 1px solid rgba(42, 42, 46, 0.3);
  cursor: ${({ isActive }) => (isActive ? "default" : "pointer")};
  display: flex;
  flex-direction: column;
  height: 75px;
  justify-content: center;
  text-align: center;
  transition: all 100ms linear;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  width: 85px;
  word-wrap: wrap;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background: #bfbfc5;
    transition: all 100ms linear;
  }

  & svg {
    fill: #2a2a2e;
    height: 25px;
    margin-bottom: 4px;
    width: 25px;
  }

  & span {
    color: #2a2a2e;
    font-size: 10px;
  }
`;
