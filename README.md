# OneED - Web

## Get Started

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

## Please Note:

If an Installed Dependency (see below) is added, removed or altered, you will need to repeat the above steps, starting with

```
$ npm install
```

## Installed Dependencies

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

  -Matthew's Test comment
