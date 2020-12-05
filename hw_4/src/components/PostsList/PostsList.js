import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import loader from '../../loader.gif';
import './PostsList.css';
import Post from "../Post/Post";
import PropTypes from 'prop-types';

function PostsList(props){
	PostsList.propTypes = {
		match: PropTypes.object
	};

	const [ posts, setPosts ] = useState([]);
	const [ loading, isLoading ] = useState(true);
	const [ error, setError ] = useState('');
	const userId = props.match.params.userId || props.userId;
	
	useEffect(() => {
		isLoading(true);
		fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
		.then(data => data.json())
		.then(json => {
			isLoading(false);
			setPosts(json)
		})
		.catch(() => {
			isLoading(false);
			setError('fetch failed');
		})
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	if (loading) {
		return <div className="loading"><img src={ loader } className="loader" alt="loader" /></div>
	}

	if (error !== '') {
		return (
			<div className="container">
				<div className="ErrorMessage">Error: { error }</div>
			</div>
		)
	}

	return (
		<div className="container">
			<div className="main">
				<Link className="PostLink" to='/' key='link'> Back  </Link>
				{
					posts && posts.map(props => (
						<Post key={ props.id } { ...props } />
					))
				}
			</div>
		</div>
	)
}

export default PostsList;