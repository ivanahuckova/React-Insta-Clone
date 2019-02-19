import React from "react";
import PropTypes from "prop-types";

//css
import "../CommentSection.css";

export default function LikesContainer(props) {
	const likes = props.likes;
	return <div>{likes} likes</div>;
}

LikesContainer.prototype = {
	likes: PropTypes.number
};
