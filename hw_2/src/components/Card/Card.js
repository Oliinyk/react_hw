import React, { useState } from 'react';
import './Card.css';

const Card = ({ name, username, email, address, phone, website, company, id, removeElement, currentIndex }) => {
	const [isSelected, setToggle] = useState(false);

	// const address_body = Object.keys(address).map(item => <div key={item} ><p>{item}: { address[item] }</p></div>);

	const handler = (e) => {
		e.preventDefault();
		e.stopPropagation();

		setToggle(!isSelected)
	}

	const cardClass = isSelected ? 'Card isSelected' : 'Card';

	return (
		<div className={cardClass} onClick={(e) => handler(e)}>
			
			<p className="Card_subTitle">id: { id }</p>

			<div className="Card_name"><p>name: { name }</p></div>
			<div className="Card_username"><p>username: { username }</p></div>
			<div className="Card_email"><p>email: { email }</p></div>

			<div className="Card_phone"><p>phone: { phone }</p></div>
			<div className="Card_website"><p>website: { website }</p></div>

			<div className="divider"></div>
			<h3 className="Card_title"> address: </h3>
			<div className="Card_street"><p>street: { address.street }</p></div>
			<div className="Card_suite"><p>suite: { address.suite }</p></div>
			<div className="Card_city"><p>city: { address.city }</p></div>
			<div className="Card_zipcode"><p>zipcode: { address.zipcode }</p></div>
			{/* {address_body} */}

			<div className="divider"></div>
			<h3 className="Card_title"> company: </h3>
			<div className="Card_company"><p>{ company.name }</p></div>
			<div className="Card_company"><p>{ company.catchPhrase }</p></div>
			<div className="Card_company"><p>{ company.bs }</p></div>

			<div className="Card_footer">
				<button className="btn btn-error" onClick={() => removeElement(currentIndex)}>Delete</button>
			</div>
		</div>
	)
};

export default Card;