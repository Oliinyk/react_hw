import React, { Component } from 'react';
import { Link} from "react-router-dom";
import loader from '../../loader.gif';
import './Users.css';

class Users extends Component {
	constructor(props){
		super(props);

		this.state = {
			data: [],
			isLoading: true
		}

		this.setUserData = this.setUserData.bind(this)
	}

	setUserData(user) {
		if (user) {
			this.setState({ data: user })
		}
	}

	componentDidMount() {
		const { isLoading } = this.state;

		fetch('https://jsonplaceholder.typicode.com/users')
		.then((response) => response.json())
		.then(this.setUserData)
		.then(() => this.setState({ isLoading: !isLoading }))
	}

	render() {
		const { isLoading } = this.state;

		return (
			<>
				{isLoading && <div className="loading"><img src={loader} className="loader" alt="loader" /></div>}

				<div className="container">
					<div className="main">
						{
							!isLoading && (
								<>
									{this.state.data.map(d => 
										<div className="Card" key={d.id}>
											<h3 className="CardId">{d.id}</h3>
											<div className="CardName"><h5>{d.name}</h5></div>
											<div className="divider"></div>
											<div><p>username: {d.username}</p></div>
											<div><p>email: { d.email }</p></div>
											<div><p>phone: { d.phone }</p></div>
											<Link className="CardLink" to={`/user/${d.id}`}></Link>
										</div>
									)}
								</>
							)
						}
					</div>
				</div>
			</>
		)
	}

}

export default Users;
