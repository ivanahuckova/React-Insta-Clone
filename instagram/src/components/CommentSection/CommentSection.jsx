import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment";
import "./Comment.css";

export default function CommentSection(props) {
	const comments = props.comments;
	const likes = props.likes;
	return (
		<div className="commentsection-container">
			<div className="commentsection-icons-likes-container">
				<div className="commentsection-icons-container">
					<img className="commentsection-icon" src="https://www.freeiconspng.com/uploads/heart-outline-19.png" alt="instagram icon" />
					<img className="commentsection-icon" src="https://www.freeiconspng.com/uploads/talking-mouth-icon-10.png" alt="instagram icon" />
				</div>
				<div>{likes} likes</div>
			</div>
			{comments.map((comment, idx) => {
				return <Comment comment={comment} key={idx} />;
			})}
		</div>
	);
}

CommentSection.propTypes = {
	comments: PropTypes.array.isRequired,
	likes: PropTypes.number.isRequired
};
