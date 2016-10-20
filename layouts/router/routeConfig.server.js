
import React from 'react';

import {
	HnRouter,
	NodeHistoryAPI,
} from './HnRouter';

import routes from './routes';

export default (req)=> (
	<HnRouter history={new NodeHistoryAPI(req)}>
		{routes}
	</HnRouter>
);
