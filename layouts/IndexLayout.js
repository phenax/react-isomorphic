
import React from 'react';

import routeConfig from './router/routeConfig.server';

import DefaultLayout from './_DefaultLayout';

export default class IndexLayout extends React.Component  {

	render() {
		return (
			<DefaultLayout>
				Test
				{routeConfig(this.props.req)}
			</DefaultLayout>
		);
	}
}
