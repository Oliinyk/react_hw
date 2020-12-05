import React from 'react';
import './App.css';
import UserWrapper from './components/UserWrapper/UserWrapper';
import {
	BrowserRouter as Router,
	Route
} from "react-router-dom";

function App() {
	return (
		<Router>
			<Route component={UserWrapper} />
		</Router>
	)
}

export default App;