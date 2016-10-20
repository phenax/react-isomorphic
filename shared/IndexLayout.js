
import React from 'react';

import getRoutes from './router/getRoutes.server';

import DefaultLayout from './_DefaultLayout';


export default class IndexLayout extends React.Component  {

	render() {

		return (
			<DefaultLayout>
				<div id='userId'>
					{getRoutes(this.props.req)}
				</div>
			</DefaultLayout>
		);
	}
}
