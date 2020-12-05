import React, { useState, useEffect } from 'react';
import loader from '../../loader.gif';
import './UsersList.css';
import User from "../User/User";
import PropTypes from 'prop-types';

function UsersList() {
	UsersList.propTypes = {
		match: PropTypes.object
	};

	const [ users, setUsers ] = useState([]);
	const [ loading, isLoading ] = useState(true);
	const [ error, setError ] = useState('');

	useEffect(() => {
		isLoading(true);
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(data => data.json())
		.then(json => {
			isLoading(false);
			setUsers(json)
		})
		.catch(() => {
			isLoading(false);
			setError('fetch failed');
		})
	}, [])

	if (loading) {
		return <div className="loading"><img src={ loader } className="loader" alt="loader" /></div>
	}

	if (error !== '') {
		return (
			<div className="container">
				<div className="ErrorMessage">Error: { error }</div>
			</div>
		)
	}

	return (
		<div className="container">
			<div className="main">
				{
					users && users.map(props => (
						<User key={ props.id } { ...props } />
					))
				}
			</div>
		</div>
	)
}

export default UsersList;