// Import: Dependencies
import styled from "styled-components/macro";

// Import: Assets
import patientImage from "../../assets/img/header/patient.jpg";
import emergencyImage from "../../assets/img/header/emergency.jpg";
import notesImage from "../../assets/img/header/notepad.jpg";

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
  background-image: ${({ patient, emergency, notes }) =>
    patient
      ? `url("${patientImage}")`
      : emergency
      ? `url("${emergencyImage}")`
      : notes
      ? `url("${notesImage}")`
      : `url("${patientImage}")`};
  background-position-x: center;
  background-position-y: 55%;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  height: 65px;
  justify-content: flex-start;
  position: relative;
  width: 100%;

  &:after {
    content: "";
    background: rgba(0, 0, 0, 0.6);
    height: 100%;
    left: 0;
    opacity: 1;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
  }
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
  z-index: 2;

  & h2 {
    font-size: 1.3rem;
  }

  @media screen and (max-width: 706px) {
    margin-left: 1rem;

    & span {
      display: none;
      visibility: hidden;
    }
  }
`;

// Element: NavToggleWrapper
export const NavToggleWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: flex-start;
  width: 100%;
`;

// Element: NavToggle
export const NavToggle = styled.div`
  align-items: center;
  background: #b3b3bc;
  cursor: pointer;
  display: none;
  justify-content: flex-start;
  height: 100%;
  padding: 0 1rem;
  transition: all 100ms linear;
  visibility: hidden;

  @media screen and (max-width: 706px) {
    display: ${({ navToggle }) => (navToggle ? "flex" : "none")};
    visibility: ${({ navToggle }) => (navToggle ? "visible" : "hidden")};
  }

  &:hover {
    background: #9e9ea9 !important;
    transition: all 100ms linear;

    & svg {
      fill: #2a2a2e !important;
      transition: all 100ms linear;
    }
  }

  & svg {
    fill: #3a3a40 !important;
    height: 25px;
    transition: all 100ms linear;
    width: 25px;
  }
`;

// Element: BigIcon
export const BigIcon = styled.div`
  align-items: center;
  /* background: #11bac1; */
  background: #008ba3;
  bottom: 1rem;
  display: flex;
  height: 70px;
  justify-content: center;
  left: 1rem;
  position: absolute;
  top: 1rem;
  width: 70px;
  z-index: 2;

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
  z-index: 2;

  & svg {
    fill: #f1f1f1;
    height: 42px;
    width: 42px;
  }
`;

// Element: SecondaryHeader
export const SecondaryHeader = styled.div`
  background: #dfdfe2;
  height: 35px;
  width: 100%;
`;
