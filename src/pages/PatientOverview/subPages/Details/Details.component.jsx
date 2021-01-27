// Import: Dependencies
import React, { useState, useEffect } from "react";
import { Offline, Online } from "react-detect-offline";

// Import: Elements
import { Container, Heading, Grid, Column, Item } from "./Details.elements";

// Import: Components
import {
  // InputCheckbox,
  ReportForm,
  ReportInput,
  ReportLabel,
  TestCheckbox,
} from "../../../../components";

// SubPage: Details
export default function Details({ db }) {
  // State: windowWidth
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // State: detailsForm
  const [detailsForm, setDetailsForm] = useState({
    name: "",
    dateOfBirth: "",
    age: "",
    gender: "",
    nhsNo: "",
    addressLineOne: "",
    addressLineTwo: "",
    addressLineThree: "",
    addressLineFour: "",
    addressPostcode: "",
    contactOne: "",
    contactTwo: "",
    contactThree: "",
    contactFour: "",
    testCheckbox: false,
  });

  // Effect: Checks and updates inner window width
  // Effect: Set detailsForm values to === values.PODetailsDatabase
  // ... if no values are in the database, set values === ""
  useEffect(() => {
    // Check current windowWidth assigns current windowWidth to state
    function updateWindowDimensions() {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);
    }

    window.addEventListener("resize", updateWindowDimensions());

    // Create database store
    db.version(1).stores({ formData: "id, value" });

    // Read/write transaction on new database store
    db.transaction("rw", db.formData, async () => {
      // Get all detailsForm values from database data
      const dbName = await db.formData.get("name");
      const dbDateOfBirth = await db.formData.get("dateOfBirth");
      const dbAge = await db.formData.get("age");
      const dbGender = await db.formData.get("gender");
      const dbNhsNo = await db.formData.get("nhsNo");
      const dbAddressLineOne = await db.formData.get("addressLineOne");
      const dbAddressLineTwo = await db.formData.get("addressLineTwo");
      const dbAddressLineThree = await db.formData.get("addressLineThree");
      const dbAddressLineFour = await db.formData.get("addressLineFour");
      const dbAddressPostcode = await db.formData.get("addressPostcode");
      const dbContactOne = await db.formData.get("contactOne");
      const dbContactTwo = await db.formData.get("contactTwo");
      const dbContactThree = await db.formData.get("contactThree");
      const dbContactFour = await db.formData.get("contactFour");
      const dbTestCheckbox = await db.formData.get("testCheckbox");

      // If the detailsForm values have not been added, populate with ""
      if (!dbName) await db.formData.add({ id: "name", value: "" });
      if (!dbDateOfBirth)
        await db.formData.add({ id: "dateOfBirth", value: "" });
      if (!dbAge) await db.formData.add({ id: "age", value: "" });
      if (!dbGender) await db.formData.add({ id: "gender", value: "" });
      if (!dbNhsNo) await db.formData.add({ id: "nhsNo", value: "" });
      if (!dbAddressLineOne)
        await db.formData.add({ id: "addressLineOne", value: "" });
      if (!dbAddressLineTwo)
        await db.formData.add({ id: "addressLineTwo", value: "" });
      if (!dbAddressLineThree)
        await db.formData.add({ id: "addressLineThree", value: "" });
      if (!dbAddressLineFour)
        await db.formData.add({ id: "addressLineFour", value: "" });
      if (!dbAddressPostcode)
        await db.formData.add({ id: "addressPostcode", value: "" });
      if (!dbContactOne) await db.formData.add({ id: "contactOne", value: "" });
      if (!dbContactTwo) await db.formData.add({ id: "contactTwo", value: "" });
      if (!dbContactThree)
        await db.formData.add({ id: "contactThree", value: "" });
      if (!dbContactFour)
        await db.formData.add({ id: "contactFour", value: "" });
      if (!dbTestCheckbox)
        await db.formData.add({ id: "testCheckbox", value: false });

      // Set the initial values
      setDetailsForm({
        name: dbName ? dbName.value : "",
        dateOfBirth: dbDateOfBirth ? dbDateOfBirth.value : "",
        age: dbAge ? dbAge.value : "",
        gender: dbGender ? dbGender.value : "",
        nhsNo: dbNhsNo ? dbNhsNo.value : "",
        addressLineOne: dbAddressLineOne ? dbAddressLineOne.value : "",
        addressLineTwo: dbAddressLineTwo ? dbAddressLineTwo.value : "",
        addressLineThree: dbAddressLineThree ? dbAddressLineThree.value : "",
        addressLineFour: dbAddressLineFour ? dbAddressLineFour.value : "",
        addressPostcode: dbAddressPostcode ? dbAddressPostcode.value : "",
        contactOne: dbContactOne ? dbContactOne.value : "",
        contactTwo: dbContactTwo ? dbContactTwo.value : "",
        contactThree: dbContactThree ? dbContactThree.value : "",
        contactFour: dbContactFour ? dbContactFour.value : "",
        testCheckbox: dbTestCheckbox ? dbTestCheckbox.value : false,
      });
    }).catch((error) => {
      console.log(error.stack || error);
      throw new Error(error.stack || error);
    });

    // Close the database connection if Details is unmounted
    // ... or the database connection changes
    return () => db.close();
  }, [db]);

  // Sets the values in the store and in the state
  const setFormValues = (id) => (value, checked) => {
    // Update store
    db.formData.put({ id, value, checked });

    // Update state
    setDetailsForm((prevFormValues) => ({
      ...prevFormValues,
      [id]: value,
      checked,
    }));
  };

  // Partial application to make on change handler easier to apply
  // ... used for text inputs
  const handleSetFormValues = (id) => (e) => setFormValues(id)(e.target.value);
  // ... used for checkbox inputs
  const handleCheckboxValues = (id) => (e) =>
    setFormValues(id)(e.target.checked ? true : false);

  // When detailsForm is submitted, prevent default action
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormValues("name")("");
    setFormValues("dateOfBirth")("");
    setFormValues("age")("");
    setFormValues("gender")("");
    setFormValues("nhsNo")("");
    setFormValues("addressLineOne")("");
    setFormValues("addressLineTwo")("");
    setFormValues("addressLineThree")("");
    setFormValues("addressLineFour")("");
    setFormValues("addressPostcode")("");
    setFormValues("contactOne")("");
    setFormValues("contactTwo")("");
    setFormValues("contactThree")("");
    setFormValues("contactFour")("");
    setFormValues("testCheckbox")(true);
  };

  // Delete IndexedDB PODetailsDatabase database
  function pleaseDelete() {
    indexedDB.deleteDatabase("PODetailsDatabase").onsuccess = function () {
      console.log("PODetailsDatabase Delete Successful");
    };
  }

  // Delete IndexedDB data on browser/tab close and/or refresh
  // ... prompts user that they are about to leave the page/lose data
  // window.addEventListener("beforeunload", () => pleaseDelete());
  window.addEventListener("beforeunload", (ev) => {
    ev.preventDefault();
    ev.returnValue = "Are you sure you want to close?";
    pleaseDelete();
  });

  return (
    <Container>
      <Heading>
        <h2>Details</h2>
      </Heading>

      <ReportForm onSubmit={handleSubmit}>
        <Grid>
          <Column>
            <Item>
              <Item>
                <ReportLabel htmlFor="details-name" text="Name" />
                <ReportInput
                  type="text"
                  name="name"
                  width="250px"
                  value={detailsForm.name}
                  id="details-name"
                  onChange={handleSetFormValues("name")}
                />
              </Item>

              <Item>
                <ReportLabel
                  htmlFor="details-dateOfBirth"
                  text="Date of Birth"
                />
                <ReportInput
                  type="text"
                  name="dateOfBirth"
                  width="250px"
                  value={detailsForm.dateOfBirth}
                  id="details-dateOfBirth"
                  onChange={handleSetFormValues("dateOfBirth")}
                />
              </Item>

              <Grid>
                <Column>
                  <Item>
                    <ReportLabel htmlFor="details-age" text="Age (Years)" />
                    <ReportInput
                      type="text"
                      name="age"
                      width="80px"
                      value={detailsForm.age}
                      id="details-age"
                      onChange={handleSetFormValues("age")}
                    />
                  </Item>
                </Column>

                <Column
                  style={windowWidth > 1378 ? { marginLeft: "1rem" } : null}
                >
                  <Item>
                    <ReportLabel htmlFor="details-gender" text="Gender" />
                    <ReportInput
                      type="text"
                      name="gender"
                      width="150px"
                      value={detailsForm.gender}
                      id="details-gender"
                      onChange={handleSetFormValues("gender")}
                    />
                  </Item>
                </Column>
              </Grid>

              <Item>
                <ReportLabel htmlFor="details-nhsNo" text="NHS No" />
                <ReportInput
                  type="text"
                  name="nhsNo"
                  width="250px"
                  value={detailsForm.nhsNo}
                  id="details-nhsNo"
                  onChange={handleSetFormValues("nhsNo")}
                />
              </Item>
            </Item>
          </Column>

          <Column>
            <Item>
              <ReportLabel htmlFor="details-addressLineOne" text="Address" />
              <ReportInput
                type="text"
                name="addressLineOne"
                width="250px"
                value={detailsForm.addressLineOne}
                id="details-addressLineOne"
                onChange={handleSetFormValues("addressLineOne")}
              />
              <ReportInput
                type="text"
                name="addressLineTwo"
                width="250px"
                value={detailsForm.addressLineTwo}
                id="details-addressLineTwo"
                onChange={handleSetFormValues("addressLineTwo")}
              />
              <ReportInput
                type="text"
                name="addressLineThree"
                width="250px"
                value={detailsForm.addressLineThree}
                id="details-addressLineThree"
                onChange={handleSetFormValues("addressLineThree")}
              />
              <ReportInput
                type="text"
                name="addressLineFour"
                width="250px"
                value={detailsForm.addressLineFour}
                id="details-addressLineFour"
                onChange={handleSetFormValues("addressLineFour")}
              />
              <ReportLabel htmlFor="details-addressPostcode" text="Post Code" />
              <ReportInput
                type="text"
                name="addressPostcode"
                width="250px"
                value={detailsForm.addressPostcode}
                id="details-addressPostcode"
                onChange={handleSetFormValues("addressPostcode")}
              />
            </Item>
          </Column>
        </Grid>

        <Grid>
          <Column>
            <Item>
              <Item>
                <ReportLabel htmlFor="details-contactOne" text="Contact 1" />
                <ReportInput
                  type="text"
                  name="contactOne"
                  width="250px"
                  value={detailsForm.contactOne}
                  id="details-contactOne"
                  onChange={handleSetFormValues("contactOne")}
                />
              </Item>

              <Item>
                <ReportLabel htmlFor="details-contactTwo" text="Contact 2" />
                <ReportInput
                  type="text"
                  name="contactTwo"
                  width="250px"
                  value={detailsForm.contactTwo}
                  id="details-contactTwo"
                  onChange={handleSetFormValues("contactTwo")}
                />
              </Item>
            </Item>
          </Column>

          <Column>
            <Item>
              <Item>
                <ReportLabel htmlFor="details-contactThree" text="Contact 3" />
                <ReportInput
                  type="text"
                  name="contactThree"
                  width="250px"
                  value={detailsForm.contactThree}
                  id="details-contactThree"
                  onChange={handleSetFormValues("contactThree")}
                />
              </Item>

              <Item>
                <ReportLabel htmlFor="details-contactFour" text="Contact 4" />
                <ReportInput
                  type="text"
                  name="contactFour"
                  width="250px"
                  value={detailsForm.contactFour}
                  id="details-contactFour"
                  onChange={handleSetFormValues("contactFour")}
                />
              </Item>
            </Item>
          </Column>
        </Grid>

        <Grid>
          <Column>
            {/* <InputCheckbox
              htmlFor="testCheckbox"
              checked={detailsForm.testCheckbox}
              onChange={handleCheckboxValues("testCheckbox")}
              name="testCheckbox"
              value={detailsForm.testCheckbox}
              id="details-testCheckbox"
              text={detailsForm.testCheckbox === true ? "TRUE" : "FALSE"}
            /> */}

            <TestCheckbox
              checked={detailsForm.testCheckbox}
              onChange={handleCheckboxValues("testCheckbox")}
              text={detailsForm.testCheckbox === true ? "TRUE" : "FALSE"}
              value={detailsForm.testCheckbox}
              name="testCheckbox"
              id="details-testCheckbox"
            />
          </Column>
        </Grid>

        <Item>
          <Online>
            <Item>
              <ReportInput type="submit" value="Submit" />
            </Item>

            <Item>
              <button onClick={pleaseDelete}>DELETE DATA</button>
            </Item>
          </Online>

          <Offline>
            <Item>
              <p>
                You are currently offline, please re-establish your internet
                connection
              </p>
            </Item>
          </Offline>
        </Item>
      </ReportForm>
    </Container>
  );
}
