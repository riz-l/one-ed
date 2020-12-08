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
  display: flex;
  flex-direction: column;
  height: 155px;
  justify-content: center;
  position: relative;
  width: 100%;
`;

// Element: IconContainer
export const IconContainer = styled.div`
  background: #11bac1;
  left: 1rem;
  padding: 1rem;
  position: absolute;
  top: calc(0.15 * 155px);

  & svg {
    fill: #f1f1f1;
    height: 65px;
    width: 65px;
  }

  @media screen and (max-width: 706px) {
    display: none;
    visibility: hidden;
  }
`;

// Element: FirstHeaderRow
export const FirstHeaderRow = styled.div`
  background-color: #2a2a2e;
  background: linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url(${({ imgSrc }) => imgSrc});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 90px;
  width: 100%;
`;

// Element: HeaderText
export const HeaderText = styled.div`
  align-items: flex-start;
  color: #f1f1f1;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin-left: 8rem;
  width: 100%;

  @media screen and (max-width: 706px) {
    margin-left: 1rem;
  }
`;

// Element: SecondHeaderRow
export const SecondHeaderRow = styled.div`
  background: #f1f1f1;
  height: 65px;
  width: 100%;
`;

// Element: Navigation
export const Navigation = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  padding-left: 8rem;
  width: 100%;

  @media screen and (max-width: 706px) {
    padding-left: 0;
  }
`;

// Element: NavigationItem
export const NavigationItem = styled.div`
  align-items: center;
  background: #f1f1f1;
  border-top: 4px solid #f1f1f1;
  cursor: pointer;
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  text-align: center;
  transition: all 100ms linear;

  &:only-child {
    height: 65px;
    left: 0;
    margin-left: 8rem;
    position: absolute;
    width: 100px;

    @media screen and (max-width: 706px) {
      margin-left: 0;
    }
  }

  &:hover {
    background: #e1e1e1;
    border-top: 4px solid #11bac1;
    transition: all 100ms linear;
  }

  & svg {
    fill: #2a2a2e;
    height: 30px;
    width: 30px;
  }

  & p {
    font-size: 0.7rem;

    @media screen and (max-width: 1520px) {
      display: none;
      visibility: hidden;
    }
  }
`;
