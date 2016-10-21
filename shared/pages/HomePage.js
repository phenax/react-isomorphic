import React from 'react';

import { Link } from '../router/HnRouter';

export default class HomePage extends React.Component {

	constructor(props) {
		super(props);

		this.state= {
			number: 0
		}

		this.btnClickHandler= this.btnClickHandler.bind(this);
	}

	btnClickHandler() {

		if(this.state.number == 5) {
			this.props.location.replace('/wow');
		}

		this.setState({
			number: this.state.number + 1
		});
	}

	render() {
		return (
			<div>
				<h1>My Awesomeness Page</h1>
				<button onClick={this.btnClickHandler}>{this.state.number || 0} clicks</button>
				<div>The 6th click will take you to wow</div>
				<br />
				<br />
				<ul>
					<li><Link to='/wow'>Click for wow</Link></li>
					<li><Link to='/awesomeness_____something'>Works with regex</Link></li>
					<li><Link to='/HelloWorld'>Can be declared as case insensitive</Link></li>
					<li><Link to='/bullshitfuckinessful'>404 Error page</Link></li>
				</ul>
			</div>
		);
	}
}


export class WowPage extends React.Component {

	render() {
		return <div>
			Such Awesome. Much Wow. 
			<Link style={{ display: 'block' }} to='/'>Go Back</Link>
		</div>;
	}
}

export class RegexPage extends React.Component {

	render() {
		return <div>
			The regex is working. Everything starting with '/awesome' will show this.
			<Link style={{ display: 'block' }} to='/'>Go Back</Link>
		</div>;
	}
}


export class CaseInsPage extends React.Component {

	render() {
		return (
			<div>
				This url is case insensitive so /helloworld /HelloWorld and /hElLowOrlD do the same thing
				<Link style={{ display: 'block' }} to='/'>Go Back</Link>
			</div>
		);
	}
}