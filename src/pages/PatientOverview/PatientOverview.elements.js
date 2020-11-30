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
  margin: auto;
  width: 95%;

  @media screen and (max-width: 1098px) {
    align-items: center;
    flex-direction: column;
    width: 85%;
  }
`;

// Element: ReportContainer
export const ReportContainer = styled.section`
  background: yellow;

  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  height: calc((100vh - 102px) - 2rem);
  max-height: calc((100vh - 102px) - 2rem);
  min-height: calc((100vh - 102px) - 2rem);
  justify-content: center;
  margin: 1rem 1rem 1rem 0;
  width: 100%;

  &:last-child {
    margin: 1rem 0 1rem 0;
  }

  @media screen and (max-width: 1098px) {
    margin: 1rem;

    &:last-child {
      margin: 0rem 1rem 1rem 1rem;
    }
  }
`;
