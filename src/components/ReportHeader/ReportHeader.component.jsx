// Import: Dependencies
import React, { useState, useEffect } from "react";

// Import: Icons
import { RiMenuUnfoldFill as OpenNavIcon } from "react-icons/ri";
import { RiMenuFoldFill as CloseNavIcon } from "react-icons/ri";

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
export default function ReportHeader({ icon, heading, subtext }) {
  // State: windowWidth
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Effect: Checks and updates inner window width
  useEffect(() => {
    const updateWindowDimensions = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);
    };

    window.addEventListener("resize", updateWindowDimensions);
  }, []);

  return (
    <Container>
      <PrimaryHeader>
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
          <NavToggle>
            {windowWidth > 706 ? <CloseNavIcon /> : <OpenNavIcon />}
          </NavToggle>
        </NavToggleWrapper>
      </SecondaryHeader>
    </Container>
  );
}
