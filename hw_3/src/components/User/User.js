import React, { Component } from 'react';
import { Link} from "react-router-dom";
import PropTypes from 'prop-types';

class User extends Component {
	render() {
		const { id, name, username, email, phone } = this.props;

		return (
			<div className="Card">
				<h3 className="CardId">{id}</h3>
				<div className="CardName"><h5>{name}</h5></div>
				<div className="divider"></div>
				<div><p>username: {username}</p></div>
				<div><p>email: { email }</p></div>
				<div><p>phone: { phone }</p></div>
				<Link className="CardLink" to={`/user/${id}`}> See posts </Link>
			</div>
		)
	}
}

User.propTypes = {
	id: PropTypes.number,
	name: PropTypes.string,
	username: PropTypes.string,
	email: PropTypes.string,
	phone: PropTypes.string
};

export default User;