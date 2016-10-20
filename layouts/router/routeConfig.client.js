
import React from 'react';

import {
	Route,
	HnRouter,
	NodeHistoryAPI,
} from './HnRouter';

class Hello extends React.Component {
	render() { return <h1>Awesomeness</h1>; }
}

class ErrorPage extends React.Component {
	render() { return <div>{'Error 404. Run for your lives'}</div>; }
}

export default (req)=> (
	<HnRouter history={new NodeHistoryAPI(req)}>

		<Route path='/' component={Hello} />
		<Route path='/wow' component={null} />

		<Route errorHandler={true} component={ErrorPage} />
	</HnRouter>
);
