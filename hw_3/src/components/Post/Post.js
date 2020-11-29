import React, { Component } from 'react';
import './Post.css';
import loader from '../../loader.gif';

class Post extends Component {
	constructor(props){
		super(props);

		this.state = {
			data: [],
			isLoading: true
		}

		this.setPostData = this.setPostData.bind(this)
	}

	setPostData(post) {
		if (post) {
			this.setState({ data: post })
		}
	}

	componentDidMount() {
		const { isLoading } = this.state;

		fetch('https://jsonplaceholder.typicode.com/posts')
		.then((response) => response.json())
		.then(this.setPostData)
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
										<div className="Post" key={d.id}>
											<div className="UserId"><p>User: {d.userId}</p></div>
											<div className="PostId"><h3>{d.id}</h3></div>
											<div className="PostTitle"><p>{d.title}</p></div>
											<div className="PostBody"><p>{d.body}</p></div>
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

export default Post;