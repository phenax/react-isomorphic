
import React from 'react';

export class Route extends React.Component {
	render() { return null; }
}

export class HnRouter extends React.Component {

	constructor(props) {

		super(props);
	}

	render() {

		const routes= this.props.children.map( val => val.props );

		const component= this.props.history.matchRoute(routes);

		return (component !== null)? component: <div className='error'>{`The component cannot be null`}</div>;
	}
}


export class NodeHistoryAPI {

	constructor(req) {
		this._req= req;
	}

	matchRoute(routes) {

		let ErrorHandler= null;
		let isAMatch= false;

		for(let i= 0; i< routes.length; i++) {

			// If its an error handler
			if(routes[i].errorHandler && routes[i].component) {

				const Error404= routes[i].component;
				const props= routes[i].props || {};

				ErrorHandler= <Error404 {...props} />
				
				continue;
			}

			// If the path entered is a regex, evaluate
			// Else, (its a string), check if it matches
			if(typeof(routes[i].path.test) === "function") {
				isAMatch= routes[i].path.test(this._req.url);
			} else {
				isAMatch= (routes[i].path === this._req.url);
			}

			if(isAMatch) {
		
				const Component= routes[i].component || null;
				const props= routes[i].props || {};

				if(Component === null)
					return null;

				return <Component {...props} />;
			}
		}

		return ErrorHandler;
	}
}



export class HistoryAPI {

	constructor(config) {
		
	}
}

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