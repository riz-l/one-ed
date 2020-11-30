// Import: Dependencies
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  background: #2a2a2e;
  height: calc(100vh - 102px);
  max-height: calc(100vh - 102px);
  min-height: calc(100vh - 102px);
  position: fixed;
  right: 0;
  top: 102px;
  transform: ${({ isPatientListOpen }) =>
    isPatientListOpen ? `translateX(0)` : `translateX(100%)`};
  transition: all 100ms linear;
  visibility: ${({ isPatientListOpen }) =>
    isPatientListOpen ? `visible` : `hidden`};
  width: 450px;
  z-index: 2;

  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`;

// Element: Header
export const Header = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem;
  position: sticky;
  -webkit-position: sticky;
  top: 0;
  width: 100%;
  z-index: 2;
`;

// Element: Heading
export const Heading = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  & svg {
    fill: #f1f1f1;
    height: 45px;
    width: 45px;
  }

  & h2 {
    color: #f1f1f1;
    font-size: 2rem;
    font-weight: 400;
    padding: 0 1rem;
  }
`;
