// Import: Dependencies
import React, { useState, useEffect } from "react";

// Import: Elements
import { Container, Wrapper } from "./ComponentTest.elements";

// Import: Components
import { RadioButton } from "../../components";

// Page: ComponentTest
export default function ComponentTest() {
  // State: testForm
  const [testForm, setTestForm] = useState({
    testRadio: "",
  });

  // Upon navigation to Home, moves DOM to top of window
  // Sets Header text as current page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Sets the values in the store and in the state
  const setFormValues = (id) => (value, checked) => {
    // Update state
    setTestForm((prevFormValues) => ({
      ...prevFormValues,
      [id]: value,
      checked,
    }));
  };

  // Partial application to make on change handler easier to apply
  // ... used for stringed text inputs
  const handleInputValues = (id) => (e) => setFormValues(id)(e.target.value);

  return (
    <>
      <Container>
        <Wrapper>
          <h1 style={{ marginBottom: "1rem" }}>Component Test</h1>
          <h2>Component: RadioButton</h2>
          <RadioButton
            checked={testForm.testRadio === "First Radio"}
            text="First RadioButton"
            value="First Radio"
            name="test"
            onChange={handleInputValues("testRadio")}
          />

          <RadioButton
            checked={testForm.testRadio === "Second Radio"}
            text="Second RadioButton"
            value="Second Radio"
            name="test"
            onChange={handleInputValues("testRadio")}
          />

          <p>
            Value of testForm.testRadio:{" "}
            <strong>
              {testForm.testRadio === ""
                ? "Please select a RadioButton"
                : testForm.testRadio.toString()}
            </strong>
          </p>
        </Wrapper>
      </Container>
    </>
  );
}
