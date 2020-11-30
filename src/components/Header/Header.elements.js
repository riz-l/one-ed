// Import: Dependencies
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.header`
  box-shadow: 0 5px 8px -9px rgba(0, 0, 0, 0.75);
  position: sticky;
  top: 0;
  width: 100%;
  min-width: 100%;
  z-index: 4;
`;

// Element: PrimaryContainer
export const PrimaryContainer = styled.div`
  background: #11bac1;
  height: 60px;
  min-height: 60px;
  width: 100%;
  min-width: 100%;
`;

// Element: SecondaryContainer
export const SecondaryContainer = styled.div`
  background: #2a2a2e;
  height: 42px;
  min-height: 42px;
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
  width: 95%;

  @media screen and (max-width: 1098px) {
    width: 85%;
  }
`;

// Element: Logo
export const Logo = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;

  & img {
    width: 100px;
    max-width: 100px;
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

// Element: Settings
export const Settings = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: flex-end;
`;

// Element: SettingsItem
export const SettingsItem = styled.div`
  align-items: center;
  border-top: 2px solid #11bac1;
  color: #f1f1f1;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 0 1rem;
  transition: all 100ms linear;

  &:hover {
    background: #0fa4a9;
    border-top: 2px solid #0fa4a9;
    color: #ffffff;
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
