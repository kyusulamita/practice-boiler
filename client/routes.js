import React, { Component } from 'react';
import { Router, browserHistory } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import history from './history';

import App from './components/App.jsx'

export default class Routes extends Component {
	constructor(props){
		super(props)
	}

	render() {
		return (
			<Router history={history}>
				<Switch>
					<Route path="/" component={App} />
				</Switch>
			</Router>
		)
	}
}
