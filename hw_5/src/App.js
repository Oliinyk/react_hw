import React from "react";
import './App.css';
import {HotelContextProvider} from "./context/HotelContext/HotelContext";
import HotelsList from "./components/HotelsList/HotelsList";
import MapWrapper from "./components/MapWrapper/MapWrapper";
import Header from "./components/Header/Header";

function App() {
	return (
		<HotelContextProvider>
			<div className="App">
				<Header />
				<div className="Wrap">
					<div className="HotelWrap">
						<HotelsList/>
					</div>
					<div className="MapWrap">
						<MapWrapper/>
					</div>
				</div>
			</div>
		</HotelContextProvider>
	);
}

export default App;