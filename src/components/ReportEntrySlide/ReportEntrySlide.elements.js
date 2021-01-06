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
  transform: ${({ slideStatus }) =>
    slideStatus ? `translateX(0)` : `translateX(100%)`};
  transition: all 100ms linear;
  visibility: ${({ slideStatus }) => (slideStatus ? `visible` : `hidden`)};
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
  display: flex;
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
  flex: 2;
  height: 100%;
  justify-content: flex-start;

  & svg {
    fill: #f1f1f1;
    height: 35px;
    margin: 0 8px;
    width: 35px;
  }

  & h2 {
    color: #f1f1f1;
    font-size: 1.6rem;
    font-weight: 400;
  }
`;

// Element: ToggleWrapper
export const ToggleWrapper = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: flex-end;
`;

// Element: Toggle
export const Toggle = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: center;
  transition: all 100ms linear;

  &:hover {
    & svg {
      fill: #ffffff;
      transition: all 100ms linear;
    }
  }

  & svg {
    fill: #f1f1f1;
    height: 35px;
    transition: all 100ms linear;
    width: 35px;
  }
`;
