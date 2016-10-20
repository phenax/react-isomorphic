
import React from 'react';

/**
 * Super class for all the history api classes
 */
export default class _HnRouteHistoryAPI {


	_isAMatch(url1, currentUrl) {

		// If the path entered is a regex, evaluate
		if(typeof(url1.test) === "function")
			return url1.test(currentUrl);

		// If its a string, see if its equal
		if(typeof(url1) === "string")
			return (url1 === currentUrl);

		return false;
	}


	_matchRoute(routes, currentUrl) {

		let $errorHandler= null;
		let $component= null;

		for(let i= 0; i< routes.length; i++) {

			$component= 
				this._getComponentFromClass(
					routes[i].component, 
					routes[i].props
				);

			// If its an error handler
			if(routes[i].errorHandler) {
				$errorHandler= $component;
				continue;
			}


			// If the path prop is not set
			if(!('path' in routes[i]))
				continue;

			// Check if route matches, return the component
			if(this._isAMatch(routes[i].path, currentUrl))
				return $component;
		}

		return $errorHandler;
	}


	_getComponentFromClass(Component, props) {

		if(!Component)
			return null;

		return <Component {...props} />;
	}
}