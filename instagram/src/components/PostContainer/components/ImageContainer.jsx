import React from "react";
import PropTypes from "prop-types";

//css
import "../PostContainer.css";

export default function ImageContainer(props) {
	const imageUrl = props.imageUrl;
	return (
		<div className="post-image-container">
			<img className="post-image" src={imageUrl} alt="users added" />
		</div>
	);
}

ImageContainer.prototype = {
	imageUrl: PropTypes.string.isRequired
};
