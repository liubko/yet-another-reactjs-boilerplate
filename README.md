yet-another-reactjs-boilerplate
============

A boilerplate using ReactJS (along with React Router and Fluxxor), LESS, Webpack, Babel and ESLint.

---

### How to set up?
1. Clone repo `git clone git@github.com:liubko/yet-another-reactjs-boilerplate.git`
2. Run `npm install` from the root directory

### How to dev?
1. Run `npm run devserver`
2. Open `http://localhost:8090` in your browser

### How to build?
1. Run `npm run build`
2. The output directory for Webpack is `public/static/build/`

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
All source files are all located within `/src/`, structured in the following manner:

```
src/
  /actions
    - index.js (List of all actions.)
    - Repos.js (Possible actions relevant to the list of repos.)
  /api
    - index.js (List of all API.)
    - Repos.js (Responsible for making AJAX requests.)
  /components
    - Header.jsx (Simple, static header component rendered on all pages.)
    - Header.less (Styles for Header.js)
    - RepoListItem.jsx (Single list item which represents single github repo.)
    - Search.jsx (Search input with button.)
    - Search.less (Styles for Search.js)
  /pages
    - HomePage.js (Example of home page, serving as the default route.)
    - SearchPage.js (Example of search page to demonstrate flux flow)
  /stores
    - index.js (List of all stores.)
    - Repos.js (Responsible for storing the list of repos)
  - App.js (It is the root component.)
  - EventConstants.js (List of events that can be dispatched from actions)
  - main.js (Entry point for Webpack. Requires `App.js`, inits flux and running the router.)
  - Routes.js (Defines the routing structure, along with each individual route path and handler.)
```
