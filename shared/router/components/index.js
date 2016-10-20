
import React from 'react';

import { triggerUpdate, routerConfig } from '../history/events';


/**
 * Link component to be used as an anchor tag for front-end routing
 */
export class Link extends React.Component {

	_visitLink(e) {

		if(this.props.href)
			return;

		if(routerConfig.type == 'hash')
			return;

		e.preventDefault();

		const defaultState= {
			path: this.props.to
		};

		window.history.pushState(
			(this.props.state)? { ...defaultState, ...this.props.state }: { ...defaultState }, 
			'', this.props.to
		);

		triggerUpdate();
	}

	render() {

		const properties= {};

		for(let key in this.props) {

			if(
				key === 'to' ||
				key === 'children'
			)
				continue;

			properties[key]= this.props[key];
		}

		return (
			<a
				href={this.props.to || this.props.href} 
				onClick={this._visitLink.bind(this)}
				{...properties} >

				{this.props.children}
			</a>
		);
	}
}

Link.propTypes= {
	to: React.PropTypes.string,
	href: React.PropTypes.string,
	state: React.PropTypes.object
};
