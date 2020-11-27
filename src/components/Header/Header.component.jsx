// Import: Dependencies
import React from "react";

// Import: Assets
import LogoWhite from "../../assets/img/logo/logo-white.png";

// Import: Icons
import { FaUserCircle as UserIcon } from "react-icons/fa";

// Import: Elements
import {
  Container,
  PrimaryContainer,
  SecondaryContainer,
  Wrapper,
  Logo,
  Settings,
  SettingsItem,
} from "./Header.elements";

// Component: Header
export default function Header() {
  return (
    <Container>
      <PrimaryContainer>
        <Wrapper>
          <Logo>
            <img src={LogoWhite} alt="OneED Logo" />
          </Logo>

          <Settings>
            <SettingsItem>
              <UserIcon />
              <p>User</p>
            </SettingsItem>
          </Settings>
        </Wrapper>
      </PrimaryContainer>

      <SecondaryContainer>
        <Wrapper>
          <Logo>
            <span>Dashboard</span>
          </Logo>
        </Wrapper>
      </SecondaryContainer>
    </Container>
  );
}
