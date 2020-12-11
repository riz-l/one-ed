// Import: Dependencies
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.div`
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

  @media screen and (max-width: 706px) {
    margin-left: 1rem;

    & span {
      display: none;
      visibility: hidden;
    }
  }
`;

// Element: BigIcon
export const BigIcon = styled.div`
  align-items: center;
  background: #11bac1;
  bottom: 1rem;
  display: flex;
  height: 70px;
  justify-content: center;
  left: 1rem;
  position: absolute;
  top: 1rem;
  width: 70px;

  & svg {
    fill: #f1f1f1;
    height: 42px;
    width: 42px;
  }

  @media screen and (max-width: 706px) {
    display: none;
    visibility: hidden;
  }
`;

// Element: SmallIcon
export const SmallIcon = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-left: 1rem;

  & svg {
    fill: #f1f1f1;
    height: 42px;
    width: 42px;
  }
`;