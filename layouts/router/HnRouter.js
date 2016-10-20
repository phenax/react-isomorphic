
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

		return (component !== null)? component: <div className='error'>Error 404</div>;
	}
}


export class NodeHistoryAPI {

	constructor(req) {
		this._req= req;
	}

	matchRoute(routes) {

		let ErrorHandler= null;

		for(let i= 0; i< routes.length; i++) {

			// If its an error handler
			if(routes[i].errorHandler && routes[i].component) {

				const Error404= routes[i].component;
				const props= routes[i].props || {};

				ErrorHandler= <Error404 {...props} />
				
				continue;
			}

			if(routes[i].path === this._req.url) {
				
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