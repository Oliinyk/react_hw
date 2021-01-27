import React from 'react';
import { Header } from '../../atoms/index.js';
import { HotelsList, MapWrapper } from '../../organisms/index.js';

const HotelCards = () => {
	return (
		<div className="App">
			<Header />
			<div className="Wrap">
				<div className="HotelWrap">
					<HotelsList />
				</div>
				<div className="MapWrap">
					<MapWrapper
						isMarkerShown
						googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
						loadingElement={<div style={{height: `100%`}}/>}
						containerElement={<div style={{height: `calc(100vh - 80px)`, width: '100%'}}/>}
						mapElement={<div style={{height: `100%`}}/>}
					/>
				</div>
			</div>
		</div>
	);
};

export default HotelCards;