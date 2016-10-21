import React from 'react';

import { Route, HnRouter } from './HnRouter';

// Allpages
import HomePage, { WowPage, RegexPage, CaseInsPage } from '../pages/HomePage';
import Error404Page from '../pages/Error404Page';

export default (history)=> (
	<HnRouter history={history}>

		<Route path='/'             component={HomePage} />
		<Route path='/wow'          component={WowPage} />
		<Route path={/^\/awesome/}  component={RegexPage} />
		<Route path='/helloworld'   component={CaseInsPage} caseInsensitive={true} />

		<Route errorHandler={true} statusCode={404} component={Error404Page} />
	</HnRouter>
);
