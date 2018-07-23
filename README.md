# Study of the React course

Link to the course: https://videoportal.epam.com/channel/g1VRq9zRKl/videos

Tasks are processed by Sergey Dmitriev

## Task 1 (Core concepts)

> Install and launch "blank" node.js application. You’ll need it in further development for implementing SSR. Commit this changes to repository.
>
> Don’t use any generators (like create-react-app)
>
> Create components in different ways, using:
> * React.createElement
> * React.Component
> * React.PureComponent
> * functional components
>
> Note: To implement this task you could use React online sandbox,
> (optional) or start to configure basic project build from task 2.
> Share sandbox link with your mentor or commit to your repository

### Progress

- [x] Install blank express.js application
- [x] Render blank message (Hello World) with react
- [x] Use at least 2 methods of creating react components
- [ ] Use all methods which mentioned in task, to create react components

## Task 2 (Webpack)
> Create package.json file and install React, Redux, React-Redux, React-Router, Jest.
> Install and configure webpack & babel to get build artifact by running npm command
> Set DEV and PROD build configuration. Use env variables, dev server, optimizations for PROD build
> Set up testing. You should have test command in your package.json file, which will run your future tests. Don’t use React boilerplate for this task.

### Progress

- [x] Installed React, Redux, React-Redux, React-Router, Jest
- [x] Configured webpack
- [x] Configured babel
- [ ] Configured tests script
- [x] Have dev and prod build commands (use _evn_ variables)

## Task 3 (Components)
> Write components implementing HTML markup for required design.
> Use ErrorBoundary component for catching and displaying errors. You could create one component and wrap all your application, or use several components.
> Use smart/dumb components approach
> 100% decomposition

### Progress

- [x] Markup is done with React Components
- [x] Use ErrorBoundary component for catching and displaying errors
- [x] Use smart/dumb components approach
- [x] 100% decomposition


## Task 4 (Testing)
> Coverage > 60%
> Write tests using enzyme and jest
> Use snapshot testing
> Use coverage tool
> Write at least one e2e test using library from the list:
> Cypress, CasperJS, Protractor, Nightwatch, Webdriver


### Progress

- [X] Coverage > 60%
- [X] Use snapshot testing
- [X] Coverage > 80%. Functional testing with enzyme and jest
- [ ] Write at least one e2e test

## Task 5 (Redux)

### Progress

- [X] All data fetches moved to actions & received from store by components
- [ ] Filtering and sorting is done as redux actions
- [ ] Actions and reducers covered with unit tests (~60%+, can be amended by mentor)
- [ ] Offline data storage & store restoration (coverage ~100%)

## Task 6 (Routing)
Create routing for your application.

Link app states between each other with React router.
By default user lands on a new page with empty results state (caption 0).

When user clicks on a film item, redirect him to:
localhost/film/id

Handle invalid URLs, display create a 404 page, where user will be redirected in case of invalid URL.
On switching search type or sorting type you shouldn’t switch any routes.
When user performs a new search, you should redirect him to:
localhost/search/Search%20Query

When a new user lands on the page with such URL, you should perform search and display results.

### Progress
- [X] Have 2+ pages which displays on different URLs
- [ ] Implement displaying 404 page for all invalid URLs
- [ ] By default user lands on a new page with empty results state
- [ ] When user performs a search on the page, change URL and show search results
- [ ] When new user enters the site using direct link with search parameters - show search results
