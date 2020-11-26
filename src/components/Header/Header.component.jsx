// Import: Dependencies
import React from "react";

// Import: Assets
import LogoWhite from "../../assets/img/logo/logo-white.png";

// Import: Icons
import { RiHospitalFill as WardIcon } from "react-icons/ri";
import {
  FaUserInjured as PatientIcon,
  FaHeartbeat as AssessmentsIcon,
  FaUserCircle as UserIcon,
} from "react-icons/fa";
import { MdVideoLibrary as TrainingIcon } from "react-icons/md";

// Import: Elements
import {
  Container,
  Wrapper,
  Logo,
  Navigation,
  NavigationItem,
  Settings,
  SettingsItem,
} from "./Header.elements";

// Component: Header
export default function Header() {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <img src={LogoWhite} alt="OneED Logo" />
        </Logo>

        <Navigation>
          <NavigationItem>
            <WardIcon />
            <p>Ward</p>
          </NavigationItem>

          <NavigationItem>
            <PatientIcon />
            <p>Patient</p>
          </NavigationItem>

          <NavigationItem>
            <AssessmentsIcon />
            <p>Assessments</p>
          </NavigationItem>

          <NavigationItem>
            <TrainingIcon />
            <p>Training</p>
          </NavigationItem>
        </Navigation>

        <Settings>
          <SettingsItem>
            <UserIcon />
            <p>User</p>
          </SettingsItem>
        </Settings>
      </Wrapper>
    </Container>
  );
}
