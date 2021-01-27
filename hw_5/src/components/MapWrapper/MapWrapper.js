import React from 'react';
import Map from "../Map/Map";

const MapWrapper = () => {
	return (
		<div className="MapContainer">
			<Map
				isMarkerShown={true}
				googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
				loadingElement={<div style={{height: `100%`}}/>}
				containerElement={<div style={{height: `calc(100vh - 80px)`, width: '100%'}}/>}
				mapElement={<div style={{height: `100%`}}/>}
			/>
		</div>
	)
};

export default MapWrapper;