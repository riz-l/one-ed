// Import: Dependencies
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

// Import: Assets
import { ReactComponent as BackIcon } from "../../assets/img/icon/back.svg";
import LogoWhite from "../../assets/img/logo/logo-white.png";

// Import: Icons
import { FaUserCircle as UserIcon } from "react-icons/fa";
import { HiUsers as AddIcon } from "react-icons/hi";
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
  UserWrapper,
  User,
  Options,
  OptionsItem,
} from "./Header.elements";

// Component: Header
export default function Header({ setIsPatientListOpen }) {
  // History: Gets URL path history
  const history = useHistory();

  // State: urlPath
  const [urlPath, setUrlPath] = useState(history.location.pathname);

  // Effect: Changes value of urlPath depending on current URL location
  useEffect(() => {
    return history.listen((location) => {
      setUrlPath(location.pathname);
    });
  }, [urlPath, history]);

  return (
    <Container>
      <PrimaryContainer>
        <Wrapper>
          <Link to="/">
            <Logo>
              {urlPath !== "" && urlPath !== "/" ? (
                <BackIcon />
              ) : (
                <img src={LogoWhite} alt="OneED Logo" />
              )}
            </Logo>
          </Link>

          <UserWrapper>
            <User>
              <UserIcon />
            </User>
          </UserWrapper>
        </Wrapper>
      </PrimaryContainer>

      <SecondaryContainer>
        <Wrapper>
          <Logo>
            <span>Current Patient: n/a</span>
          </Logo>

          <Options>
            <OptionsItem
              onClick={() => {
                setIsPatientListOpen((isPatientListOpen) => !isPatientListOpen);
              }}
            >
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
