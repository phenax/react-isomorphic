
import React from 'react';

import DefaultLayout from './_DefaultLayout';

export default class ErrorLayout extends React.Component {

	render() {

		return (
			<DefaultLayout title='500 Error'>
				<div className='error'>
					<h2>{this.props.message}</h2>
					<pre>{this.props.error.toString()}</pre>
				</div>
			</DefaultLayout>
		);
	}
}