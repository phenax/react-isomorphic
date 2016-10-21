
import React from 'react';

export default class Error500Layout extends React.Component {

	render() {

		console.error("\n\n", this.props.message, "\n\n", this.props.error);

		return (
			<div className='error'>
				<title>500 Error - {this.props.message}</title>

				<h2>{this.props.message}</h2>
				<pre>{this.props.error.stack}</pre>
			</div>
		);
	}
}