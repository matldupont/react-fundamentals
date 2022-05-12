# React Fundamentals

This repo is used to teach the fundamentals of [React](https://reactjs.org/). The `main` branch will always be up to date, with individual branches breaking down certain concepts.

## Highlights

- As applications grow with more features, state must be raised higher to live around the new dependant features
- The higher the state, the deeper we have to "prop drill" to get it to the relevant components
- The [Context API](https://reactjs.org/docs/context.html) can help alleviate prop drilling and separation of concerns by giving related data (and actions) a home.
- Custom hooks (`useCustomer()`) can be created to consume the provided context, lower the API's complexity and adding error checks for use outside the provider
- _NOTE_: `React.createContext()` must be initialized with nothing (`()`) or `(undefined)` in order for the error checking to work properly. Default values will undermine the check.

## Topics by Branch

- [01 - Functional and Class Components, State vs. Props and controlled inputs](https://github.com/matldupont/react-fundamentals/tree/01-components-state-props)

- [02 - React Hooks and Reusable Form Components](https://github.com/matldupont/react-fundamentals/tree/02-forms)

- [03 - New features exploring the Context API and more React Hooks](https://github.com/matldupont/react-fundamentals/tree/03-hooks-and-context)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
