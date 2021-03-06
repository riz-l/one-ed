// Import: Dependencies
import React from "react";

// Import: Assets
import { ReactComponent as TickIcon } from "../../assets/img/icon/tick.svg";

// Import: Elements
import {
  Container,
  Input,
  Label,
  Text,
  VisualBox,
} from "./RadioButton.elements";

// Component: RadioButton
export default function RadioButton({ checked, name, onChange, text, value }) {
  return (
    <>
      <Container>
        <Label htmlFor={value}>
          <Text>{text}</Text>

          <VisualBox checked={checked} onChange={onChange}>
            <TickIcon />

            <Input
              type="radio"
              value={value}
              name={name}
              checked={checked}
              onChange={onChange}
            />
          </VisualBox>
        </Label>
      </Container>
    </>
  );
}
