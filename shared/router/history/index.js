import _HnRouteHistoryAPI from './_HnRouteHistoryAPI';

import {
	triggerUpdate,
	addRouteChangeListener,
	removeRouteChangeListener
} from '../history/events';



/**
 * Helper class to be passed into the HnRouter component for 
 * routing in NodeJS
 */
export class NodeHistoryAPI extends _HnRouteHistoryAPI {

	constructor(req) {
		super();

		this._req= req;
	}

	matchRoute(routes) {

		this._currentUrl= this._req.url;

		return this._matchRoute(routes, this._currentUrl);
	}
}

/**
 * Helper class to be passed into the HnRouter component for 
 * routing on the client side (pushState routing)
 */
export class HistoryAPI extends _HnRouteHistoryAPI {

	constructor(config) {
		super();

		this._config= config;

		window.onpopstate= triggerUpdate;

		this._randomId= Math.floor(Math.random()*1000000).toString(16);
	}

	matchRoute(routes) {

		this._currentUrl= window.location.pathname;

		return this._matchRoute(routes, this._currentUrl);
	}

	routeChangeListener(callback) {

		addRouteChangeListener(this._randomId, 
			event => {
				callback({
					url: window.location.pathname
				});
			}
		);
	}

	removeChangeListener() {
		removeRouteChangeListener(this._randomId);
	}
}




/**
 * Helper class to be passed into the HnRouter component for 
 * routing on the client side (hash routing)
 */
export class HashHistoryAPI extends _HnRouteHistoryAPI {

	constructor(config) {
		super();

		this._config= config;
	}

	_parseHash(hash) {
		return hash.remove('#');
	}

	matchRoute(routes) {

		this._currentUrl= this._parseHash(window.location.hash);

		console.log(this._currentUrl);

		return this._matchRoute(routes, this._currentUrl);
	}

	routeChangeListener() {

		window.onhashchange= (e)=> triggerUpdate();
	}

	removeChangeListener() {
		// Nothing because its not a .addEventListener
	}
}