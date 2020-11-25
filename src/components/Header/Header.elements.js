// Import: Dependencies
import styled from "styled-components/macro";

// Element: Container
export const Container = styled.header`
  background: #11bac1;
  box-shadow: 0 5px 8px -9px rgba(0, 0, 0, 0.75);
  height: 70px;
  min-height: 70px;
  width: 100%;
  min-width: 100%;
`;

// Element: Wrapper
export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  margin: 0 1rem;
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
`;

// Element: Navigation
export const Navigation = styled.nav`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
`;

// Element: NavigationItem
export const NavigationItem = styled.div`
  align-items: center;
  border-top: 2px solid #11bac1;
  color: #f1f1f1;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  padding: 0 2rem;
  transition: all 100ms linear;

  &:hover {
    border-top: 2px solid #0fa4a9;
    color: #ffffff;
    background: #0fa4a9;
    transition: all 100ms linear;
  }

  & svg {
    height: 25px;
    width: 25px;
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
  padding: 0 2rem;
  transition: all 100ms linear;

  &:hover {
    border-top: 2px solid #0fa4a9;
    color: #ffffff;
    background: #0fa4a9;
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
