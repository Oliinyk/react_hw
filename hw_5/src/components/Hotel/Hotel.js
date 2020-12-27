import React from 'react';
import './Hotel.css';
import PropTypes from 'prop-types';

const Hotel = ( {props} ) => {
	Hotel.propTypes = {
		thumbnailUrl: PropTypes.string,
		name: PropTypes.string,
		address: PropTypes.string,
		badgeText: PropTypes.string,
		rating: PropTypes.number,
		current: PropTypes.number,
		info: PropTypes.string,
	};

	return (
		<div className="Card">
			<div className="CardThumbnail">
				<img src={props.thumbnailUrl} alt={props.name}/>
			</div>
			<div className="CardInfo">
				<div className="TopCard">
					<p className="CardTitle">{props.name}</p>
					<p className="CardSubTitle">
						{props.address.countryName}  
						{props.address.locality} 
						{props.address.region} 
						{props.address.streetAddress}
					</p>
				</div>
				<div className="BottomCard">
					<div className="CardReviews">
						<p>{props.guestReviews.badgeText}</p>
						<p>{props.guestReviews.rating}</p>
					</div>
					<div className="CardSubPrice">
						<p>{props.ratePlan.price.current}</p> 
						<p>{props.ratePlan.price.info}</p>
					</div>
				</div>
			</div>
		</div>
	)
};

export default Hotel;