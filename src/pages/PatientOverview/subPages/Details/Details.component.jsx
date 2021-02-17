// Import: Dependencies
import React, { useState, useEffect } from "react";

// Import: Elements
import { Column, Container, Grid, Heading, Item } from "./Details.elements";

// Import: Components
import { Input, ReportForm } from "../../../../components";

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
  });

  // Effect: Checks and updates inner window width
  // Effect: Set detailsForm values to === values.PODetails
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
      });
    }).catch((error) => {
      console.log(error.stack || error);
      throw new Error(error.stack || error);
    });

    // Close the database connection if Details is unmounted
    // ... or if the database connection changes
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
  };

  // Delete IndexedDB PODetails database
  function pleaseDelete() {
    indexedDB.deleteDatabase("PODetails").onsuccess = function () {
      console.log("PODetails Delete Successful");
    };
  }

  // Delete IndexedDB data on browser/tab close and/or refresh
  // ... prompts user that they are about to leave the page/lose data
  // window.addEventListener("beforeunload", () => pleaseDelete());
  window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
    e.returnValue = "Are you sure you want to close?";
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
                <Input
                  htmlFor="name"
                  labelText="Name"
                  onChange={handleSetFormValues("name")}
                  type="text"
                  value={detailsForm.name}
                  width="250px"
                />
              </Item>

              <Item>
                <Input
                  htmlFor="dateOfBirth"
                  labelText="Date of Birth"
                  onChange={handleSetFormValues("dateOfBirth")}
                  type="text"
                  value={detailsForm.dateOfBirth}
                  width="250px"
                />
              </Item>

              <Grid>
                <Column>
                  <Item>
                    <Input
                      htmlFor="age"
                      labelText="Age (Years)"
                      onChange={handleSetFormValues("age")}
                      type="text"
                      value={detailsForm.age}
                      width="80px"
                    />
                  </Item>
                </Column>

                <Column
                  style={windowWidth > 1378 ? { marginLeft: "1rem" } : null}
                >
                  <Item>
                    <Input
                      htmlFor="gender"
                      labelText="Gender"
                      onChange={handleSetFormValues("gender")}
                      type="text"
                      value={detailsForm.gender}
                      width="150px"
                    />
                  </Item>
                </Column>
              </Grid>

              <Item>
                <Input
                  htmlFor="nhsNo"
                  labelText="NHS No"
                  onChange={handleSetFormValues("nhsNo")}
                  type="text"
                  value={detailsForm.nhsNo}
                  width="250px"
                />
              </Item>
            </Item>
          </Column>

          <Column>
            <Item>
              <Input
                htmlFor="addressLineOne"
                labelText="Address"
                onChange={handleSetFormValues("addressLineOne")}
                type="text"
                value={detailsForm.addressLineOne}
                width="250px"
              />

              <Input
                htmlFor="addressLineTwo"
                onChange={handleSetFormValues("addressLineTwo")}
                type="text"
                value={detailsForm.addressLineTwo}
                width="250px"
              />

              <Input
                htmlFor="addressLineThree"
                onChange={handleSetFormValues("addressLineThree")}
                type="text"
                value={detailsForm.addressLineThree}
                width="250px"
              />

              <Input
                htmlFor="addressLineFour"
                onChange={handleSetFormValues("addressLineFour")}
                type="text"
                value={detailsForm.addressLineFour}
                width="250px"
              />

              <Input
                htmlFor="addressPostcode"
                onChange={handleSetFormValues("addressPostcode")}
                labelText="Postcode"
                type="text"
                value={detailsForm.addressPostcode}
                width="250px"
              />
            </Item>
          </Column>
        </Grid>

        <Grid>
          <Column>
            <Item>
              <Item>
                <Input
                  htmlFor="contactOne"
                  onChange={handleSetFormValues("contactOne")}
                  labelText="Contact 1"
                  type="text"
                  value={detailsForm.contactOne}
                  width="250px"
                />
              </Item>

              <Item>
                <Input
                  htmlFor="contactTwo"
                  onChange={handleSetFormValues("contactTwo")}
                  labelText="Contact 2"
                  type="text"
                  value={detailsForm.contactTwo}
                  width="250px"
                />
              </Item>
            </Item>
          </Column>

          <Column>
            <Item>
              <Item>
                <Input
                  htmlFor="contactThree"
                  onChange={handleSetFormValues("contactThree")}
                  labelText="Contact 3"
                  type="text"
                  value={detailsForm.contactThree}
                  width="250px"
                />
              </Item>

              <Item>
                <Input
                  htmlFor="contactFour"
                  onChange={handleSetFormValues("contactFour")}
                  labelText="Contact 4"
                  type="text"
                  value={detailsForm.contactFour}
                  width="250px"
                />
              </Item>
            </Item>
          </Column>
        </Grid>
      </ReportForm>
    </Container>
  );
}
