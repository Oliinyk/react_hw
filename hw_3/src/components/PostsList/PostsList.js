import React, { Component } from 'react';
import { Link} from "react-router-dom";
import loader from '../../loader.gif';
import './PostsList.css';
import Post from "../Post/Post";
import PropTypes from 'prop-types';

class PostsList extends Component {
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
		const { match } = this.props;

		fetch(`https://jsonplaceholder.typicode.com/posts?userId=${match.params.userId}`)
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
									<Link className="PostLink" to='/' key='link'> Back  </Link>
									{this.state.data.map((props) => (
										<Post { ...props } key={props.id} />
									))}
								</>
							)
						}
					</div>
				</div>
			</>
        )
	}
}

PostsList.propTypes = {
	match: PropTypes.object
};

export default PostsList;