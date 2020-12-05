import React from 'react';
import PropTypes from 'prop-types';

function Post( props ) {
	Post.propTypes = {
		userId: PropTypes.number,
		id: PropTypes.number,
		title: PropTypes.string,
		body: PropTypes.string
	};

	return (
		<div className="Post">
			<div className="UserId"><p><span className="UserNumber">{ props.userId }</span> User</p></div>
			<div className="PostInner">
				<div className="PostId"><p>Post number: { props.id }</p></div>
				<div className="PostTitle"><p>{ props.title }</p></div>
				<div className="PostBody"><p>{ props.body }</p></div>
			</div>
		</div>
	)
}

export default Post;