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
  padding: 1rem;
  width: 100%;

  @media screen and (max-width: 1098px) {
    align-items: center;
    flex-direction: column;
  }
`;

// Element: ReportContainer
export const ReportContainer = styled.section`
  align-items: center;
  background: #ffffff;
  display: flex;
  flex: 1;
  flex-direction: column;
  height: calc((100vh - 102px) - 2rem);
  max-height: calc((100vh - 102px) - 2rem);
  min-height: calc((100vh - 102px) - 2rem);
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

// Element: ReportHeader
export const ReportHeader = styled.div`
  align-items: center;
  background: #f1f1f1;
  display: flex;
  flex-direction: column;
  height: 100px;
  justify-content: center;
  width: 100%;
`;

// Element: PrimaryHeader
export const PrimaryHeader = styled.div`
  align-items: center;
  background: #3a3a40;
  display: flex;
  height: 65px;
  justify-content: flex-start;
  position: relative;
  width: 100%;
`;

// Element: SecondaryHeader
export const SecondaryHeader = styled.div`
  background: #dfdfe2;
  height: 35px;
  width: 100%;
`;

// Element: HeaderWrapper
export const HeaderWrapper = styled.div`
  align-items: flex-start;
  color: #f1f1f1;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin-left: 6.4rem;

  @media screen and (max-width: 454px) {
    margin-left: 1rem;
  }
`;

// Element: Icon
export const Icon = styled.div`
  align-items: center;
  background: #11bac1;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 1rem;
  padding: 1rem;
  position: absolute;
  top: calc(0.15 * 100px);

  & svg {
    fill: #f1f1f1;
    height: 40px;
    width: 40px;
  }

  @media screen and (max-width: 454px) {
    display: none;
    visibility: hidden;
  }
`;
