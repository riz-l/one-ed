// Import: Dependencies
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.header`
  box-shadow: 0 5px 8px -9px rgba(0, 0, 0, 0.75);
  height: 100px;
  position: sticky;
  -webkit-position: sticky;
  top: 0;
  width: 100%;
  min-width: 100%;
  z-index: 5;
`;

// Element: PrimaryContainer
export const PrimaryContainer = styled.div`
  /* background: #11bac1; */
  background: #008ba3;
  height: 60px;
  min-height: 60px;
  width: 100%;
  min-width: 100%;
`;

// Element: SecondaryContainer
export const SecondaryContainer = styled.div`
  background: #2a2a2e;
  height: 40px;
  min-height: 40px;
  width: 100%;
  min-width: 100%;
`;

// Element: Wrapper
export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  margin: auto;
  width: 100%;
`;

// Element: Logo
export const Logo = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 100%;
  max-height: 100%;
  justify-content: center;
  padding: 0 1rem;
  transition: all 100ms linear;

  &:hover {
    & svg {
      fill: #ffffff;
      transition: all 100ms linear;
    }
  }

  & img {
    width: 100px;
    max-width: 100px;
  }

  & svg {
    fill: #f1f1f1;
    height: 40px;
    transition: all 100ms linear;
    width: 40px;
  }

  & span {
    color: #f1f1f1;
    text-transform: uppercase;

    @media screen and (max-width: 706px) {
      display: none;
      visibility: hidden;
    }
  }

  @media screen and (max-width: 1098px) {
    margin-left: 0;
  }
`;

// Element: UserWrapper
export const UserWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
`;

// Element: User
export const User = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 0 1rem;
  transition: all 100ms linear;

  &:hover {
    /* background: #0fa4a9; */
    background: #00687a;
    transition: all 100ms linear;

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

// Element: Options
export const Options = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: flex-end;
`;

// Element: OptionsItem
export const OptionsItem = styled.div`
  align-items: center;
  border-top: 2px solid #2a2a2e;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 0 1rem;
  transition: all 100ms linear;

  &:hover {
    background: #1d1d20;
    border-top: 2px solid #1d1d20;
    transition: all 100ms linear;

    & svg {
      fill: #ffffff;
      transition: all 100ms linear;
    }
  }

  & svg {
    fill: #f1f1f1;
    height: 25px;
    transition: all 100ms linear;
    width: 25px;
  }
`;
