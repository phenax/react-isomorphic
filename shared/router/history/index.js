import _HnRouteHistoryAPI from './_HnRouteHistoryAPI';

import * as events from '../history/events';



/**
 * Helper class to be passed into the HnRouter component for 
 * routing in NodeJS
 */
export class NodeHistoryAPI extends _HnRouteHistoryAPI {

	constructor(req) {
		super();

		this._req= req;

		events.routerConfig.type= 'node';
	}

	matchRoute(routes) {

		this._currentUrl= this._req.url;

		const route= this._findMatchRoute(routes, this._currentUrl);

		this._req.statusCode= route.statusCode || null;

		return {

			url: this._currentUrl,
			
			$component: this._getComponentFromClass(
				route.component, 
				route.props
			)
		};
	}
}

/**
 * Helper class to be passed into the HnRouter component for 
 * routing on the client side (pushState routing)
 */
export class HistoryAPI extends _HnRouteHistoryAPI {

	constructor(config) {
		super();

		this._randomId= Math.floor(Math.random()*1000000).toString(16);

		window.addEventListener('popstate', events.triggerUpdate);

		events.routerConfig.type= 'push';
	}

	matchRoute(routes) {

		this._currentUrl= window.location.pathname;

		return this._matchRoute(routes, this._currentUrl);
	}

	routeChangeListener(callback) {

		events.addRouteChangeListener(this._randomId, 
			event => {
				callback({
					url: window.location.pathname
				});
			}
		);
	}

	removeChangeListener() {
		events.removeRouteChangeListener(this._randomId);
		window.removeEventListener('popstate', events.triggerUpdate);
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

		events.routerConfig.type= 'hash';
	}

	_parseHash(hash) {
		return hash.replace('#', '');
	}

	matchRoute(routes) {

		if(window.location.hash == '')
			window.location.hash= '#/';

		this._currentUrl= this._parseHash(window.location.hash);

		if(this._currentUrl == '')
			this._currentUrl= '/';

		return this._matchRoute(routes, this._currentUrl);
	}

	routeChangeListener() {

		window.addEventListener('hashchange', events.triggerUpdate);
	}

	removeChangeListener() {

		window.removeEventListener('hashchange', events.triggerUpdate);
	}
}