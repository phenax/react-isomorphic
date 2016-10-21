
import React from 'react';

import getRoutes from './router/getRoutes.server';

import DefaultLayout from './_DefaultLayout';


export default class IndexLayout extends React.Component  {

	render() {

		return (
			<DefaultLayout title='New App Thingy'>
				<div id='awesomeApp'>
					{getRoutes(this.props.req)}
				</div>
			</DefaultLayout>
		);
	}
}
