# ReactJS-Mentoring
<br>

<h1>Get started</h2>
<h2>Install all dependencies</h2>
<p>npm install</p>

<h2>Start</h2>
<p>npm start</p>

<h2>Start using Server Side Rendering</h2>
<p>npm run build:dev</p>
<p>npm run build:server</p>
<p>npm run start:server</p>

<br>

<h1>Tasks done:</h1>

<h2>Task 2: Webpack</h2>
<p>Create package.json file and install React, Redux, React-Redux, React-Router, Jest. Install and configure Webpack & 
Babel to get build artifact by running npm command.</p> 
<p>Set DEV and PROD build configuration. Use env variables, dev server, optimizations for PROD build. Set up testing. 
You should have test command in your package.json file, which will run your future tests. Don’t use any React 
boilerplate (like create-react-app) for this task.</p>

<h2>Task 3: Components part 1</h2>
<p>Write components implementing HTML markup for required design for home page of
InVision prototype (Only UI part). For this part, no need to implement API calls and
routing, the task can be done with mocked data.</p>
<p>Use <ErrorBoundary> component for catching and displaying errors
<a>https://reactjs.org/docs/error-boundaries.html</a>. You could create one component and wrap
all your application or use several components.</p>

<h2>Task 4: Components part 2</h2>
<p>Implement markup and styles for “Add movie”, “Edit”, “Delete” modal windows and
“sorting”. No need to implement real API calls. Only add pages with mocked data. No
need to implement hooks in this task.</p>

<h2>Task 5: Hooks</h2>
<p>Implement markup and styles for “Movie details” page.
In your project, change Class components into Functional components and use hooks
where applicable.</p>

<h2>Task 6 (Redux)</h2>
<p>1. Go through API docs in swagger: http://localhost:4000/api-docs</p>
<p>2. Make your components perform real AJAX requests. Implement data fetches as
async actions and pass data to your components with redux.</p>
<p>3. Implement creating, editing and updating films according to the design operations
as redux actions.</p>
<p>4. Implement filtering and sorting (by genre, rating, and release date) as redux actions.</p>

<h2>Task 7 (Forms)</h2>
<p>1. Install formik</p>
<p>2. Implementation of “Add movie”
form with validation</p>
<p>3. Implementation of “Edit movie”
form with validation</p>

<h2>Task 8 (Routing)</h2>
<p>1. Create routing for your application (via React Router).</p>
<p>2. Add 404 (error page) and ‘No movies found’ page.</p>
<p>3. Link app states between each other with React Router.</p>
<p>4. By default, user lands on a new page with empty results state.</p>
<p>5. When user clicks on a film item, redirect them to:
localhost/film/id </p>
<p>6. Handle invalid URLs, display a 404 page, where user will be redirected in case of invalid URL.
On switching search type or sorting type you shouldn’t switch any routes..</p>
<p>7. When user performs a new search, you should redirect them to:
localhost/search/Search%20Query</p>
<p>8. When a new user lands on the page with such URL, you should perform search and display
results.</p>

<h2>Task 9 (Testing)</h2>
<p>Write unit tests for your application (consider using Jest, @testing-library/react
or Enzyme, react-test-renderer, React-test-utils, etc.):</p>
<p>1. Cover 1 simple presentational component with snapshot tests.</p>
<p>2. Cover 1 reducer and all its actions with unit-tests.</p>
<p>3. Measure coverage level with coverage report.</p>
<p>4. Cover “Add movie” modal dialog components with unit-tests, mock all external
dependencies using Jest mocks </p>

<h2>Task 10 (Server-Side Rendering)</h2>
<p>Implement server rendering in your NodeJS application. Use async actions, redux should provide initial state from server.</p>
<p>Server should handle query parameters to compute correct initial state.</p>
<p>Implement route masking. Next.js provides this functionality out of the box, but its usage
is not required. Example of route masking:</p>
<p>localhost/search/Hello%20Friend</p>
<p>localhost/search/Search%20Query</p>
<p>When a new user lands on the page with such URL, you should perform search and display
results</p>
<p>Add code splitting to your app. You can use dynamic import() syntax in conjunction with
webpack and React.lazy, some library (react-loadable), or next.js.</p>
