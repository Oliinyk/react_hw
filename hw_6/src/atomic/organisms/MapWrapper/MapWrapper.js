import React, { useContext } from 'react';
import { GoogleMap, Marker, withGoogleMap, withScriptjs } from 'react-google-maps';
import { HotelsContext } from '../context/HotelsContext.js';

const MapWrapper = withScriptjs(
	withGoogleMap(({ isMarkerShown }) => {
		const { hotels } = useContext(HotelsContext);
		let currentCenter = {lat: 40.669612, lng: -73.811325};

		if ("geolocation" in navigator) {
			navigator.geolocation.getCurrentPosition(function(position) {
				currentCenter = {lat: position.coords.latitude, lng: position.coords.longitude}
			});
		}
		const defaultCenter = hotels.length > 0 ? {lat: hotels[0].coordinate.lat, lng: hotels[0].coordinate.lon} : currentCenter;

		return (
			<GoogleMap
				defaultZoom={11}
				defaultCenter={defaultCenter}
				>
				{
					isMarkerShown &&
					hotels &&
					hotels.map(({ coordinate: { lat, lon } }) => (
						<Marker position={{ lat: lat, lng: lon }} />
					))
				}
			</GoogleMap>
		);
	})
);

export default MapWrapper;