import React from 'react';
import './App.css';
import CardsWrapper from "./components/CardsWrapper/CardsWrapper";
import { users } from './components/users';

function App() {
	return (
		<CardsWrapper users={users} />
	)
}

export default App;