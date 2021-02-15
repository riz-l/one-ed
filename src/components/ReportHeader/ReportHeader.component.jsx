// Import: Dependencies
import React, { useState, useEffect } from "react";

// Import: Icons
import { RiMenuUnfoldFill as OpenNavIcon } from "react-icons/ri";
import { RiMenuFoldFill as CloseNavIcon } from "react-icons/ri";

import backgroundImg from "../../assets/img/header/patient.jpg";

// Import: Elements
import {
  Container,
  PrimaryHeader,
  HeaderWrapper,
  BigIcon,
  SmallIcon,
  NavToggleWrapper,
  NavToggle,
  SecondaryHeader,
} from "./ReportHeader.elements";

// Component: ReportHeader
export default function ReportHeader({
  icon,
  heading,
  subtext,
  navToggle,
  navStatus,
}) {
  // State: windowWidth
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Effect: Checks and updates inner window width
  useEffect(() => {
    function updateWindowDimensions() {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);
    }

    window.addEventListener("resize", updateWindowDimensions());
  }, [windowWidth]);

  return (
    <Container>
      <PrimaryHeader
        style={{
          backgroundImage: `url(${backgroundImg})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        {windowWidth > 706 ? (
          <BigIcon>{icon}</BigIcon>
        ) : (
          <SmallIcon>{icon}</SmallIcon>
        )}

        <HeaderWrapper>
          <h2>{heading}</h2>
          <span>{subtext}</span>
        </HeaderWrapper>
      </PrimaryHeader>

      <SecondaryHeader>
        <NavToggleWrapper>
          <NavToggle navToggle={navToggle} onClick={navToggle}>
            {navStatus ? <CloseNavIcon /> : <OpenNavIcon />}
          </NavToggle>
        </NavToggleWrapper>
      </SecondaryHeader>
    </Container>
  );
}
