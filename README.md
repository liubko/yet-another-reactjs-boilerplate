yet-anouther-react-boilerplate
============

A boilerplate using ReactJS (along with React Router and Fluxxor), LESS, Webpack, Babel and ESLint.

---

### Getting up and running

1. Clone repo `git clone git@github.com:liubko/yet-another-react-boilerplate.git`
2. Run `npm install` from the root directory
3. Run `npm run devserver`
4. Open `http://localhost:8090` in your browser

---

This boilerplate uses the latest versions of the following libraries:
- [ReactJS](https://github.com/facebook/react)
- [React Router](https://github.com/rackt/react-router)
- [Fluxxor](https://github.com/BinaryMuse/fluxxor)
- [LESS](https://github.com/less/less.js)
- [Webpack](https://github.com/webpack/webpack)
- [Babel](https://github.com/babel/babel)
- [ESLint](https://github.com/eslint/eslint)

---

### Structure

All source files are all located within `/src/js`, structured in the following manner:

```
src/
  /actions
    - index.js (list of all actions)
    - Repos.js (Possible actions relevant to the list of repos.)
  /api
    - index.js (list of all API)
    - Repos.js
  /components
    - Header.jsx (Simple, static header component rendered on all pages.)
    - Header.less (Styles from Header.js)
    - RepoListItem.jsx (Single list item which represents single github repo.)
    - Search.jsx (Search imput with button)
    - Search.less (Styles from Search.js)
  /pages
    - HomePage.js (Example of home page, serving as the default route.)
    - SearchPage.js (Example of search page to demonstrate flux flow)
  /stores
    - index.js (list of all stores)
    - Repos.js (Responsible for storing the list of repos)
  App.js (The main container component, rendered to the DOM and then responsible for rendering all pages.)
  EventConstants.js (List of events that can be dispatched from actions)
  main.js (Entry point for Webpack. Requires App and running the router.)
  Routes.js (Defines the routing structure, along with each individual route path and handler.)
```
