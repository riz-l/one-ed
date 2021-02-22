// Import: Dependencies
import React from "react";

// Import: Elements
import { Container } from "./RadioButton.elements";

// Component: RadioButton
export default function RadioButton({ checked, name, onChange, text, value }) {
  return (
    <>
      <Container>
        <label htmlFor={value}>
          <input
            type="radio"
            value={value}
            name={name}
            checked={checked}
            onChange={onChange}
          />
          {text}
        </label>
      </Container>
    </>
  );
}
