// Import: Dependencies
import React from "react";

// Import: Elements
import { Container, Label, Select, Option } from "./Dropdown.elements";

// Component: Dropdown
export default function Dropdown({ htmlFor, labelText, options, left }) {
  return (
    <Container left={left}>
      <Label htmlFor={htmlFor} left={left}>
        {labelText}
      </Label>

      <Select name={htmlFor} id={htmlFor}>
        {options.map((option, index) => (
          <Option key={index}>{option}</Option>
        ))}
        ;
      </Select>
    </Container>
  );
}
