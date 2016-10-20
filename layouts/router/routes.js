import React from 'react';

import { Route, HnRouter } from './HnRouter';

class Hello extends React.Component {
	render() { return <h1>Awesomeness</h1>; }
}

class ErrorPage extends React.Component {
	render() { return <div>{'Error 404. Run for your lives'}</div>; }
}

export default (history)=> (
	<HnRouter history={history}>
		<Route path='/' component={Hello} />
		<Route path='/wow' component={null} />
		<Route path={/^\/awesome$/} component={Hello} />

		<Route errorHandler={true} component={ErrorPage} />
	</HnRouter>
);