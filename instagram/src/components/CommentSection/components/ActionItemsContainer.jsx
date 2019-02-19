import React from "react";
import PropTypes from "prop-types";

//css
import "../CommentSection.css";

export default function ActionItemsContainer(props) {
	const toggleLike = () => props.toggleLike();
	const didLike = props.didLike;
	return (
		<div className="commentsection-icons-container">
			{/*heart images + logic for red heart/heart outline image*/}
			<img
				onClick={toggleLike}
				className={didLike ? "commentsection-icon display-none" : "commentsection-icon display-true"}
				src="/assets/heart-icon.svg"
				alt="instagram icon"
			/>
			<img
				onClick={toggleLike}
				className={!didLike ? "commentsection-icon display-none" : "commentsection-icon display-true"}
				src="/assets/heart-red-icon.svg"
				alt="instagram icon"
			/>

			{/*bubble image*/}
			<img className="commentsection-icon bubble" src="/assets/bubble-icon.svg" alt="instagram icon" />
		</div>
	);
}

ActionItemsContainer.propTypes = {
	toggleLike: PropTypes.func,
	didLike: PropTypes.bool
};
