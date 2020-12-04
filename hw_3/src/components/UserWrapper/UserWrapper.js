import React, { Component } from 'react';
import { Route, Switch} from "react-router-dom";
import UsersList from "../UsersList/UsersList";
import PostsList from "../PostsList/PostsList";

class UsersWrapper extends Component {
	render() {
		return (
			<>
				<Switch>
					<Route exact path='/' component={UsersList} />
					<Route path='/user/:userId' component={PostsList} />
				</Switch>
			</>
		)
	}
}

export default UsersWrapper;