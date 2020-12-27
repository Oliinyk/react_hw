import React, {useContext} from 'react';
import {HotelContext} from '../../context/HotelContext/HotelContext'
import Hotel from "../Hotel/Hotel";

const HotelsList = () => {
	const { hotels } = useContext(HotelContext);
	return (
		<div>
			{
				hotels && hotels.map( props => (
					<Hotel key={ props.id } props={ props } />
				))
			}
		</div>
	)
};

export default HotelsList;