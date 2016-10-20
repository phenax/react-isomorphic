
import React from 'react';

/**
 * Link component to be used as an anchor tag for front-end routing
 */
export class Link extends React.Component {

	_visitLink(e) {

		if(this.props.href)
			return;

		e.preventDefault();

		// push route
	}

	render() {

		const properties= {};

		for(let key in this.props) {

			console.log(key);

			if(key === 'to')
				continue;

			// properties[key]= this.props[key]
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