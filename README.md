Isomorphic React Boilerplate
============================
Isomorphic react + express app with server-side rendering and declarative isomorphic routing for both front-end and back-end.
<br /><br /><br /><br /><br />


## Instructions

#### Starting the server

* ```git clone https://github.com/phenax/react-isomorphic.git```

* ```cd react-isomorphic```

* ```npm i```

* ```npm start``` (or ```npm run start:prod``` for production mode)

<br />

#### Building the client-side js files

* ```npm run build:js``` to build ./client.js to ./public/js/script.js

* ```npm run build:js:prod``` to build for production(with minification and tree-shaking)


<br /><br /><br />


## Routing

#### History API
There are 3 types of routing available - Backend routing(`new NodeHistoryAPI(request)`), Push State routing(`new HistoryAPI(options)`), Hash routing(`new HashHistoryAPI(options)`)(NOTE: The naming is just for consistency)

<br />

#### The Router
`history` is the history api instance you pass in depending on the kind of routing you require. (The server side rendering only works for Push State routing on the client side, not Hash routing).
```html
<HnRoute history={history}>
  {allRouteDeclarations}
</HnRoute>
```

<br />

#### Declaring a route
If `Homepage` is a react component class and `/` is the url.
```html
<Route path='/' component={HomePage} />
```

* `path` (string or regex)        - The url to route the request to
* `component` (React component)   - The component to be rendered when the route is triggered
* `statusCode` (integer)          - The status code for the response
* `caseInsensitive` (boolean)     - Set to true if you want the url to be case insensitive
* `errorHandler` (boolean)        - Set to true to define a 404 error handler

