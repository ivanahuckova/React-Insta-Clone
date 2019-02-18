import React from "react";
import PropTypes from "prop-types";
import CommentSection from "../CommentSection/CommentSection";
import "./Post.css";

export default function PostContainer(props) {
	const post = props.post;
	const comments = post.comments;
	return (
		<div className="postcontainer-container">
			<div className="post-container">Postcontainer</div>
			<CommentSection comments={comments} />
		</div>
	);
}

PostContainer.propTypes = {
	post: PropTypes.shape({
		username: PropTypes.string,
		thumbnailUrl: PropTypes.string,
		imageUrl: PropTypes.string,
		likes: PropTypes.number,
		timestamp: PropTypes.string,
		comments: PropTypes.array
	}).isRequired
};
