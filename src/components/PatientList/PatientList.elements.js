// Import: Dependencies
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  background: #2a2a2e;
  height: 100vh;
  max-height: 100vh;
  min-height: 100vh;
  overflow-y: auto;
  position: fixed;
  right: 0;
  top: 0;
  transform: ${({ isPatientListOpen }) =>
    isPatientListOpen ? `translateX(0)` : `translateX(100%)`};
  transition: all 100ms linear;
  visibility: ${({ isPatientListOpen }) =>
    isPatientListOpen ? `visible` : `hidden`};
  width: 500px;
  z-index: 6;

  @media screen and (max-width: 768px) {
    width: 100vw;
  }
`;

// Element: Header
export const Header = styled.div`
  align-items: flex-start;
  background: #2a2a2e;
  box-shadow: 0 5px 8px -9px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  padding: 1rem;
  position: sticky;
  -webkit-position: sticky;
  top: 0;
  width: 100%;
  z-index: 3;
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

// Element: ItemWrapper
export const ItemWrapper = styled.div`
  z-index: 2;
`;
