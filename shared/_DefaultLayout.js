
import React from 'react';

export default class _DefaultLayout extends React.Component {

	render() {

		return (
			<html>
				<head>
					<title>{this.props.title || "Some Title"}</title>
				</head>
				<body>

					{this.props.children}

					<script async defer src='/js/script.js' />
					<link href='/css/style.css' rel='stylesheet' />
				</body>
			</html>
		);
	}
}