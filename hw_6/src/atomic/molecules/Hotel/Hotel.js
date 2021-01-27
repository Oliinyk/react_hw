import React from 'react';
import { Title, Text, Image } from '../../atoms/index.js';

const Hotel = (props) => {
	const {
		name,
		thumbnailUrl,
		badgeText,
		rating,
		countryName,
		locality,
		region,
		streetAddress,
		info,
		current,
	} = props;

	return (
		<div className="Card">
			<div className="CardThumbnail">
				<Image url={thumbnailUrl} alt={name} />
			</div>
			<div className="CardInfo">
				<div className="TopCard">
					<Title h={3} className="CardTitle">
						{name}
					</Title>
					<Text className="CardSubTitle">
						{countryName}, 
						{locality}, 
						{region}, 
						{streetAddress}
					</Text>
				</div>
				<div className="BottomCard">
					<div className="CardReviews">
						<Text>{badgeText}</Text>
						<Text>{rating}</Text>
					</div>
					<div className="CardSubPrice">
						<Text>{current}</Text> 
						<Text>{info}</Text>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hotel;