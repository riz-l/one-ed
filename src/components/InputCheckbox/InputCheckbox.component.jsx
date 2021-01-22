// Import: Dependencies
import React from "react";

// Import: Assets
import { ReactComponent as TickIcon } from "../../assets/img/icon/tick.svg";

// Import: Elements
import {
  Container,
  Input,
  Label,
  VisualBox,
  Wrapper,
} from "./InputCheckbox.elements";

// Component: InputCheckbox
export default function InputCheckbox({
  checked,
  htmlFor,
  name,
  onChange,
  text,
  under,
  value,
}) {
  return (
    <Container>
      <Wrapper under={under}>
        <Input
          type="checkbox"
          checked={checked}
          name={name}
          onChange={onChange}
          value={value}
        />

        <VisualBox onClick={onChange} checked={checked}>
          <TickIcon />
        </VisualBox>

        <Label htmlFor={htmlFor} under={under}>
          {text}
        </Label>
      </Wrapper>
    </Container>
  );
}
