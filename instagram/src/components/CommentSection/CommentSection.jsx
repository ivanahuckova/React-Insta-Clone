import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";

export default function CommentSection(props) {
	const comments = props.comments;
	return (
		<div className="commentsection-container">
			{comments.map((comment, idx) => {
				return <Comment comment={comment} key={idx} />;
			})}
		</div>
	);
}

CommentSection.propTypes = {
	comments: PropTypes.array.isRequired
};
