import React, { Component } from 'react';
import loader from '../../loader.gif';
import './UsersList.css';
import User from "../User/User";
import PropTypes from 'prop-types';

class UsersList extends Component {
	constructor(props){
		super(props);

		this.state = {
			data: [],
			isLoading: true
		}

		this.setUserData = this.setUserData.bind(this)
	}

	setUserData(user) {
		if (user) {
			this.setState({ data: user })
		}
	}

	componentDidMount() {
		const { isLoading } = this.state;

		fetch('https://jsonplaceholder.typicode.com/users')
		.then((response) => response.json())
		.then(this.setUserData)
		.then(() => this.setState({ isLoading: !isLoading }))
	}

	render() {
		const { isLoading } = this.state;

		return (
			<>
				{isLoading && <div className="loading"><img src={loader} className="loader" alt="loader" /></div>}

				<div className="container">
					<div className="main">
						{
							!isLoading && (
								<>
									{this.state.data.map((props) => (
										<User { ...props } key={props.id} />
									))}
								</>
							)
						}
					</div>
				</div>
			</>
		)
	}
}

UsersList.propTypes = {
	match: PropTypes.object
};

export default UsersList;