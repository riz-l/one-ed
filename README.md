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

## Creating forms

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

- Now create state for each form item that we'll need. In this example the `<Checkbox />` and `<ReportInput />` components will be used, so we'll need state for both components:

  ```
  const [exampleRenderForm, setExampleRenderForm] = useState({
    exampleCheckbox: false,
    exampleReportInput: "",
  });
  ```

  Note that because a `<Checkbox />` is either on or off, this translates to having a value that is either true or false. So, as a result, the initial state for the `exampleCheckbox` is set to false (unless the `<Checkbox />` needs to be ticked (true) by default).
  
  Opposed to this, because a `<ReportInput />` accepts text, without any starting text the initial state for `exampleReportInput` is an empty string ("") (unless the `<ReportInput />` needs to be populated by a stringed value by default).

- Next, inside a `useEffect()` we need to:
  1. Create a database store
  2. Perform a read/write transaction on the new database store
  3. Get all values from the database data
  4. If these values haven't been added, populate them with default values
  5. Use these values to alter/populate the initial state
  6. Catch any possible errors
  7. Allow closure of the database if the rendering component (`<ExampleRender />`) is unmounted

