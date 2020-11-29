import React from 'react';
import './App.css';

// import ConstructorExample from "./components/Mounting/constructor";

// import ComponentDidMountMethod_2 from "./components/Mounting/componentDidMountMethod_2";
// import GetDerivedStateFromPropsMethod from "./components/Mounting/getDerivedStateFromProps";


import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link,
	useRouteMatch,
	useParams
} from "react-router-dom";

import Post from "./components/Post/Post";
import Users from "./components/Users/Users";



class App extends React.Component {
	render() {
		return(
			<Router>
				<Route exact path='/' component={Users} />
				<Route path='/user/' component={Post} />
			</Router>
		)
	}
}
  
export default App;