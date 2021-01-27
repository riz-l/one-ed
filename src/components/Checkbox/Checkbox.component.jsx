// Import: Dependencies
import React from "react";

// Import: Assets
import { ReactComponent as TickIcon } from "../../assets/img/icon/tick.svg";

// Import: Elements
import {
  Container,
  Wrapper,
  Label,
  InputCheckbox,
  Text,
  VisualBox,
} from "./Checkbox.elements";

// Component: Checkbox
export default function Checkbox({ checked, onChange, under, text }) {
  return (
    <Container>
      <Label>
        <Wrapper under={under}>
          <InputCheckbox
            type="checkbox"
            checked={checked}
            onChange={onChange}
          />

          <VisualBox checked={checked}>
            <TickIcon />
          </VisualBox>

          <Text under={under}>{text}</Text>
        </Wrapper>
      </Label>
    </Container>
  );
}
