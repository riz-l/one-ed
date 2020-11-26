// Import: Dependencies
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  align-items: center;
  background: #11bac1;
  cursor: pointer;
  display: flex;
  height: 180px;
  min-height: 180px;
  justify-content: center;
  margin: 10px;
  transition: all 100ms linear;
  width: 180px;
  min-width: 180px;

  &:nth-last-child() {
    margin-bottom: 0;
  }

  &:hover {
    background: #0fa4a9;
    box-shadow: 0 5px 8px -9px rgba(0, 0, 0, 0.75);
    transform: translateY(-10px);
    transition: all 100ms linear;
  }
`;

// Element: Wrapper
export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 8px;
  transition: all 100ms linear;
  width: 100%;

  & img {
    margin-bottom: 1rem;
    padding: 8px;
    width: 50%;
  }

  & h3 {
    color: #f1f1f1;
    font-weight: 400;
    text-align: center;
  }

  &:hover {
    filter: brightness(110%);
    transition: all 100ms linear;
  }
`;
