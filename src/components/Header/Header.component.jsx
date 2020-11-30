// Import: Dependencies
import React from "react";
import { Link } from "react-router-dom";

// Import: Assets
import LogoWhite from "../../assets/img/logo/logo-white.png";

// Import: Icons
import { FaUserCircle as UserIcon } from "react-icons/fa";
import { RiAddLine as AddIcon } from "react-icons/ri";
import { MdChat as MessageIcon } from "react-icons/md";
import { GoFile as DocumentIcon } from "react-icons/go";
import { RiLogoutBoxRLine as LogoutIcon } from "react-icons/ri";

// Import: Elements
import {
  Container,
  PrimaryContainer,
  SecondaryContainer,
  Wrapper,
  Logo,
  Settings,
  SettingsItem,
  Options,
  OptionsItem,
} from "./Header.elements";

// Component: Header
export default function Header({ selectedPage }) {
  return (
    <Container>
      <PrimaryContainer>
        <Wrapper>
          <Link to="/">
            <Logo>
              <img src={LogoWhite} alt="OneED Logo" />
            </Logo>
          </Link>

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
            <span>{selectedPage}</span>
          </Logo>

          <Options>
            <OptionsItem>
              <AddIcon />
            </OptionsItem>

            <OptionsItem>
              <MessageIcon />
            </OptionsItem>

            <OptionsItem>
              <DocumentIcon />
            </OptionsItem>

            <OptionsItem>
              <LogoutIcon />
            </OptionsItem>
          </Options>
        </Wrapper>
      </SecondaryContainer>
    </Container>
  );
}
