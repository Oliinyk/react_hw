import React from 'react';
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';

function User( props ) {
	User.propTypes = {
		id: PropTypes.number,
		name: PropTypes.string,
		username: PropTypes.string,
		email: PropTypes.string,
		phone: PropTypes.string
	};

	return (
		<div className="Card">
			<h3 className="CardId">{ props.id }</h3>
			<div className="CardName"><h5>{ props.name }</h5></div>
			<div className="divider"></div>
			<div><p>username: { props.username }</p></div>
			<div><p>email: { props.email }</p></div>
			<div><p>phone: { props.phone }</p></div>
			<Link className="CardLink" to={`/user/${ props.id }`}> See posts </Link>
		</div>
	)
}

export default User;