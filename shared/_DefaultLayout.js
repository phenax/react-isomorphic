
import React from 'react';

export default class _DefaultLayout extends React.Component {

	render() {

		return (
			<html>
				<head>
					<title>{this.props.title || "Hacker News"}</title>
				</head>
				<body>

					{this.props.children}

					<script src='/js/script.js' />
					<link rel='/css/style.css' rel='stylesheet' />
				</body>
			</html>
		);
	}
}