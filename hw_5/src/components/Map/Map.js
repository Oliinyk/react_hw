import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";
import {useContext} from "react";
import {HotelContext} from "../../context/HotelContext/HotelContext";
import PropTypes from 'prop-types';

const Map = withScriptjs(withGoogleMap((props) => {
	Map.propTypes = {
		isMarkerShown: PropTypes.string,
		coordinate: PropTypes.number
	};

	const { hotels } = useContext(HotelContext);
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
			defaultCenter={ defaultCenter }
			>
			{
				props.isMarkerShown && hotels.map((props, index) => (
					<Marker key={index} position={{ lat: props.coordinate.lat, lng: props.coordinate.lon }} />
				))
			}
		</GoogleMap>
	)
}));

export default Map;