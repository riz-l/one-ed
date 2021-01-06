// Import: Dependencies
import React, { useRef, useEffect } from "react";

// Import: Assets
import { ReactComponent as PatientIcon } from "../../assets/img/icon/list-patient.svg";

// Import: Icons
import { AiOutlineCloseSquare as ToggleIcon } from "react-icons/ai";

// Import: Elements
import {
  Container,
  Header,
  Heading,
  ItemWrapper,
  ToggleWrapper,
  Toggle,
} from "./PatientList.elements";

// Import: Components
import { PatientListItem } from "../index";

// Component: PatientList
export default function PatientList({
  isPatientListOpen,
  setIsPatientListOpen,
}) {
  // Ref: node
  const node = useRef();

  // Effect: Checks to see if click is inside or outside PatientList
  function useOnClickOutside(node, handler) {
    useEffect(() => {
      const listener = (event) => {
        // If clicking node element or children elements do nothing
        if (!node.current || node.current.contains(event.target)) {
          return;
        }

        handler(event);
      };

      document.addEventListener("mousedown", listener);
      document.addEventListener("touchstart", listener);

      return () => {
        document.removeEventListener("mousedown", listener);
        document.removeEventListener("touchstart", listener);
      };
    }, [node, handler]);
  }

  // If click is outside of PatientList, isPatientListOpen === false
  useOnClickOutside(node, () => setIsPatientListOpen(false));

  return (
    <Container ref={node} isPatientListOpen={isPatientListOpen}>
      <Header>
        <Heading>
          <PatientIcon />
          <h2>
            Patient List <span>(15)</span>
          </h2>
        </Heading>

        <ToggleWrapper>
          <Toggle
            onClick={() =>
              setIsPatientListOpen((isPatientListOpen) => !isPatientListOpen)
            }
          >
            <ToggleIcon />
          </Toggle>
        </ToggleWrapper>
      </Header>

      <ItemWrapper>
        <PatientListItem />
        <PatientListItem />
        <PatientListItem />
        <PatientListItem />
        <PatientListItem />
        <PatientListItem />
        <PatientListItem />
      </ItemWrapper>
    </Container>
  );
}
