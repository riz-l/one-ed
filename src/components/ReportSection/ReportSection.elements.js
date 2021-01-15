// Import: Dependencies
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
  background: transparent;
  height: 100%;
  width: 100%;
`;

// Element: Wrapper
export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 0 1rem;
  width: 100%;

  @media screen and (max-width: 1098px) {
    align-items: center;
    flex-direction: column;
  }
`;

// Element: Report
export const Report = styled.section`
  align-items: center;
  background: ${({ background }) => (background ? background : "#ffffff")};
  display: flex;
  flex: 1;
  flex-direction: column;
  height: calc((100vh - 100px) - 2rem);
  max-height: calc((100vh - 100px) - 2rem);
  min-height: calc((100vh - 100px) - 2rem);
  justify-content: flex-start;
  margin: 1rem 1rem 1rem 0;
  width: 100%;

  &:last-child {
    margin: 1rem 0 1rem 0;
  }

  @media screen and (max-width: 1098px) {
    margin: 1rem;

    &:last-child {
      margin: 1rem;
    }
  }
`;

// Element: ContentWrapper
export const ContentWrapper = styled.div`
  display: grid;
  grid-template-areas: "navigation content";
  grid-template-columns: ${({ nav }) => (nav ? "85px 1fr" : "0 1fr")};
  height: calc((100vh - 100px) - 2rem);
  max-height: calc((100vh - 100px) - 2rem);
  overflow-y: auto;
  transition: all 100ms linear;
  width: 100%;

  @media screen and (max-width: 706px) {
    grid-template-columns: ${({ navStatus }) =>
      navStatus ? "85px 1fr" : "0 1fr"};
    transition: all 100ms linear;
  }
`;

// Element: Header
export const Header = styled.header`
  height: 100px;
  width: 100%;
`;

// Element: Navigation
export const Navigation = styled.nav`
  grid-area: navigation;
  height: 100%;
  transition: all 100ms linear;
  width: ${({ nav }) => (nav ? "85px" : "0")};
  z-index: 3;

  @media screen and (max-width: 706px) {
    display: ${({ navStatus }) => (!navStatus ? "none" : null)};
    transition: all 100ms linear;
    visibility: ${({ navStatus }) => (!navStatus ? "hidden" : "visible")};
  }
`;

// Element: Content
export const Content = styled.div`
  grid-area: content;
  height: 100%;
  width: 100%;
  z-index: 2;
`;
