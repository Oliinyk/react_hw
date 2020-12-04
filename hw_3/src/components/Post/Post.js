import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Post extends Component {
	render() {
		const { userId, id, title, body } = this.props;

		return (
			<>
				<div className="Post">
					<div className="UserId"><p><span className="UserNumber">{userId}</span> User</p></div>
					<div className="PostInner">
						<div className="PostId"><p>Post number: {id}</p></div>
						<div className="PostTitle"><p>{title}</p></div>
						<div className="PostBody"><p>{body}</p></div>
					</div>
				</div>
			</>
		)
	}
}

Post.propTypes = {
	userId: PropTypes.number,
	id: PropTypes.number,
	title: PropTypes.string,
	body: PropTypes.string

};

export default Post;