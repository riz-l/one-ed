# OneED - Web

## Get started

- To start using this app, open your chosen Text Editor, navigate to your specified folder directory, open a new Terminal and run:

  ```
  $ git clone https://github.com/riz-l/one-ed.git
  ```

- After this, make sure you `cd` into the newly cloned folder directory e.g. `cd one-ed`, and then run:

  ```
  $ npm install
  ```

- When this is complete, check the Terminal log to make sure no fixes are required. If a fix is required, you will be prompted to run:

  ```
  $ npm audit fix
  ```

- Lastly, after the above fix is complete (or not needed), run:

  ```
  $ npm start
  ```

## Please note:

If an Installed Dependency (see below) is added, removed or altered, you will need to repeat the above steps, starting with

```
$ npm install
```

## Installed dependencies

- `create-react-app`

  - Used to initialise the React application

- `react-router-dom`

  - Used to enable page navigation

- `styled-components`

  - Used to allow css-in-js styling for components

- `axios`

  - Used to facilitate API usage

- `react-icons`

  - Used to access public icons

- `dexie`

  - Used to utilise IndexedDB with developer-friendly code

- `react-detect-offline`

  - Used to detect online/offline state of React application

- `react-minimal-pie-chart`

  - Used to construct pie charts

## Creating and using IndexedDB forms

- In the form's parent component, import `dexie`:

  ```
  import dexie from "dexie"
  ```

- Next, in this parent component use `dexie` to declare a new data table for the form:

  ```
  // Dexie: database = ExampleRenderDatabase
  const db = new Dexie("ExampleRenderDatabase");
  ```

- Now, pass the newly declared data table as props to the child component that will be used to render the form. In this example, the child component will be called `<ExampleRender />`. Note that the typical form component/prop structure will be as follows:

  ```
  <ReportSection
    header={
      <ReportHeader
        icon={<ExampleRenderIcon />}
        heading="Example Render"
        subtext="Example Render used as a test"
        navToggle={toggleExampleRenderNav}
        navStatus={isExampleRenderOpen}
      />
    }
    nav={
      <ReportNavigation navStatus={isExampleRenderOpen}>
        <ReportNavigationItem isActive>
          <ExampleRenderIcon />
          <span>ExampleRender</span>
        </ReportNavigationItem>
      </ReportNavigation>
    }
    content={<ExampleRender db={db} />}
    navStatus={isExampleRenderNavOpen}
  />
  ```

  Pay particular attention to the `content` props. `content` in this case accepts:

  ```
  <ExampleRender db={db} />
  ```

  where `db` had been declared previously with `dexie`.

- Onto the tricky part. Firstly, in the child component that is being used to render the form, destructure the `db` prop that we've just passed from the parent:

  ```
  export default function ExampleRender({ db }) {

  };
  ```

- Now using `useState()` create state for each form item that we'll need. In this example the `<Checkbox />` and `<ReportInput />` components will be used, so we'll need state for both components:

  ```
  const [exampleRenderForm, setExampleRenderForm] = useState({
    exampleCheckbox: false,
    exampleReportInput: "",
  });
  ```

  Note that because a `<Checkbox />` is either on or off, this translates to having a value that is either true or false. So, as a result, the initial state for the `exampleCheckbox` is set to false (unless the `<Checkbox />` needs to be ticked (true) by default).

  Opposed to this, because a `<ReportInput />` accepts text, without any starting text the initial state for `exampleReportInput` is an empty string ("") (unless the `<ReportInput />` needs to be populated by a stringed value by default).

- Next, inside a `useEffect()` with the accepted prop of `db`, create the database store:

  ```
  db.version(1).stores({ formData: "id, value });
  ```

- Using `db`, we need to perform a read/write transaction on the new database store, get all values from the database data, populate the values with default values if needed, use these values to alter/populate the initial state, catch any possible errors, and finally - allow closure of the database if the rendering component (in our case the `<ExampleRender />`) is unmounted.

  ```
  // Read/write transaction on new database store
  useState(() => {
    // Create database store
    db.transaction("rw", db.formData, async () => {

      // Get all exampleRenderForm values from database data
      const dbExampleCheckbox = await db.formData.get("exampleCheckbox");
      const dbExampleReportInput = await db.formData.get("exampleReportInput");

      // If the exampleRenderForm values have not been added, populate with false or ""
      if (!dbExampleCheckbox) await db.formData.add({ id: "exampleCheckbox", value: false });
      if (!dbExampleReportInput) await db.formData.add({ id: "exampleReportInput", value: "" });

      // Set the initial values
      setExampleRenderForm({
        exampleCheckbox: dbExampleCheckbox ? db.ExampleCheckbox.value : false,
        exampleReportInput: dbExampleReportInput ? db.dbExampleReportInput.value : "",
      });
    }).catch((error) => {
      console.log(error.stack || error);
      throw new Error(error.stack || error);
    });

    // Close the database connection if ExampleRender is unmounted
    // ... or if the database connection changes
    return () => db.close();
  }, [db]);
  ```

- Now declare an arrow function that will allow us to set values in the store, and in the state:

  ```
  const setExampleRenderValues = (id) => (value, checked) => {
    // Update store
    db.formData.put({ id, value, checked });

    // Update state
    setExampleRenderForm((prevExampleRenderFormValues) => ({
      ...prevExampleRenderFormValues,
      [id]: value,
      checked,
    }));
  };
  ```

- Let's create another arrow function to allow us to make the `onChange` handlers easier to apply:

  ```
  // ... used for checkbox inputs
  const handleCheckboxValues = (id) => (e) =>
    setExampleRenderValues(id)(e.target.checked ? true : false);

  // ... used for text inputs
  const handleReportInputValues = (id) => (e) => setExampleRenderValues(id)(e.target.value);
  ```

- Now we need a function to facilitate the deletion of the database that we established earlier. This function will be added to our Logout function and will also be used should a user refresh their browser, or open a new tab, or close their browser altogether.

  ```
  function pleaseDelete() {
    indexedDB.deleteDatabase("ExampleRenderDatabase").onsuccess = function () {
      console.log("ExampleRenderDatabase delete successful");
    };
  };
  ```

- `pleaseDelete()` now needs to be added to an event listener, which will listen for the browser being refreshed, closed, or having the tab hosting OneED being closed. Additionally, this event listener will prompt the user, informing them that they are about to leave the page/lose data

  ```
  window.addEventListener("beforeunload", (e) => {
    e.preventDefault();
    e.returnValue = "Are you sure you want to close OneED?";
    pleaseDelete();
  });
  ```

- We can finally implement all of the above tasks. For a `<Checkbox />` component, our implementation will be as follows:

  ```
  <Checkbox
    checked={exampleRenderForm.exampleCheckbox}
    onChange={handleCheckboxValues("testCheckbox")}
    text="This is an example checkbox"
    value={exampleRenderForm.exampleCheckbox}
    name="exampleCheckbox"
    id="exampleRender-exampleCheckbox"
   />
  ```

- For a `<ReportInput />` component, our implementation will be as follows:

  ```
  <ReportInput
    type="text"
    onChange={handleReportInputValues("exampleReportInput")}
    value={exampleRenderForm.exampleReportInput}
    name="exampleCheckbox"
    id="exampleRender-exampleReportInput"
  />
  ```
