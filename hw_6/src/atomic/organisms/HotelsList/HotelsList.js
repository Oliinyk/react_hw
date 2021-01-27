import React, { useContext } from 'react';
import { HotelsContext } from '../context/HotelsContext.js';
import Hotel from '../../molecules/Hotel/Hotel.js';

const HotelsList = () => {
	const { hotels, setData } = useContext(HotelsContext);

	return (
		hotels &&
		hotels.map((apartment) => {
			const {
				name,
				thumbnailUrl,
				guestReviews: { badgeText, rating },
				address: { countryName, locality, region, streetAddress },
				ratePlan: {
				price: { info, current },
				},
			} = apartment;

			return (
				<Hotel
				name={name}
				thumbnailUrl={thumbnailUrl}
				badgeText={badgeText}
				rating={rating}
				countryName={countryName}
				locality={locality}
				region={region}
				streetAddress={streetAddress}
				info={info}
				current={current}
				/>
			);
		})
	);
};

export default HotelsList;