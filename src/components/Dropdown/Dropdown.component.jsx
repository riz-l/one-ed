// Import: Dependencies
import React from "react";

// Import: Elements
import { Container, Label, Select, Option } from "./Dropdown.elements";

// Component: Dropdown
export default function Dropdown({
  htmlFor,
  labelText,
  onChange,
  options,
  left,
  width,
}) {
  return (
    <Container left={left}>
      <Label htmlFor={htmlFor} left={left}>
        {labelText}
      </Label>

      <Select
        name={htmlFor}
        id={htmlFor}
        onChange={onChange}
        defaultValue="select"
        style={{ width: `${width}` }}
      >
        <Option value="select" disabled hidden>
          Select...
        </Option>
        {options.map((option, index) => (
          <Option key={index} value={option}>
            {option}
          </Option>
        ))}
        ;
      </Select>
    </Container>
  );
}
