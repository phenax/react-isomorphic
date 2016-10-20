
import React from 'react';

import _HnRouteHistoryAPI from './history/_HnRouteHistoryAPI';

export * from './history';
export * from './components';

// Error components
const NULLCOMPONENTERROR= 'The component cannot be null';
const HISTORYTYPEERROR= 'The prop `history` has to be an instance of either HistoryAPI or NodeHistoryAPI';


/**
 * Route declaration component
 */
export class Route extends React.Component {
	render() { return null; }
}

/**
 * Routing wrapper for specifying router elements
 */
export class HnRouter extends React.Component {

	constructor(props) {
		super(props);

		this._routes= 
			this.props.children
				.filter( comp => !(comp instanceof Route) )
				.map( val => val.props );
	}

	render() {

		if(!(this.props.history instanceof _HnRouteHistoryAPI))
			throw new Error(HISTORYTYPEERROR);

		const $component= this.props.history.matchRoute(this._routes);

		if($component === null)
			throw new Error(NULLCOMPONENTERROR);

		return $component;
	}
}
