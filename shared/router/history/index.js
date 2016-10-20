
import _HnRouteHistoryAPI from './_HnRouteHistoryAPI';


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

		const currentUrl= this._req.url;

		return this._matchRoute(routes, currentUrl);
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
}