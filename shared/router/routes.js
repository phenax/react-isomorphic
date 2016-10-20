import React from 'react';

import { Route, HnRouter, Link } from './HnRouter';

class Hello extends React.Component {
	render() {
		return (
			<div>
				<h1>Awesomeness</h1>
				<Link to='/wow'>Click for wow</Link>
			</div>
		);
	}
}

class WowPage extends React.Component {
	render() { return <div>{'Such Awesome. Much Wow.'}</div>; }
}

class ErrorPage extends React.Component {
	render() { return <div>{'Error 404. Run for your lives'}</div>; }
}

export default (history)=> (
	<HnRouter history={history}>
		<Route path='/' component={Hello} />
		<Route path='/wow' component={WowPage} />
		<Route path={/^\/awesome$/} component={Hello} />

		<div className='awesome' />

		<Route errorHandler={true} component={ErrorPage} />
	</HnRouter>
);