import React from "react";
import PropTypes from "prop-types";

//css
import "../PostContainer.css";

export default function UserHeadingContainer(props) {
	const username = props.username;
	const thumbnailUrl = props.thumbnailUrl;
	return (
		<div className="post-user-container">
			<img className="post-thumbnail" src={thumbnailUrl} alt="thumbnail of user" />
			<div className="post-username">{username}</div>
		</div>
	);
}

UserHeadingContainer.prototype = {
	thumbnailUrl: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired
};
