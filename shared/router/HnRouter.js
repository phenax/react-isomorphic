
import React from 'react';

import _HnRouteHistoryAPI from './history/_HnRouteHistoryAPI';

export * from './history';
export * from './components';

// Error components
const DEFAULTERROR= "Something went wrong";
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

		this.state= {
			currentUrl: '/'
		};

		this._routes= 
			this.props.children
				.filter( comp => (comp.type === (<Route />).type) )
				.map( val => val.props );

		if(!(this.props.history instanceof _HnRouteHistoryAPI))
			throw new Error(HISTORYTYPEERROR);
	}

	componentDidMount() {

		this.props.history
			.routeChangeListener((data)=> {

			this.setState({
				currentUrl: data.url
			});
		});
	}

	componentWillUnmount() {
		this.props.history.removeChangeListener();
	}

	render() {

		const route= this.props.history.matchRoute(this._routes);
		
		if(!route) {
			throw new Error(DEFAULTERROR);
		}

		const { $component }= route;

		if(!$component) {
			throw new Error(NULLCOMPONENTERROR);
		}

		return React.cloneElement(
			$component, 
			{ url: this.state.currentUrl }
		);
	}
}
