import React from "react";
import PropTypes from "prop-types";

//components
import UserHeadingContainer from "./components/UserHeadingContainer";
import ImageContainer from "./components/ImageContainer";
import TimeStampContainer from "./components/TimeStampContainer";
import CommentSection from "../CommentSection/CommentSection";

//css
import "./PostContainer.css";

export default function PostContainer(props) {
	return (
		<div className="postcontainer-container">
			{/* User Heading Contaienr - consists of name and thumbnail image of user  */}
			<UserHeadingContainer thumbnailUrl={props.post.thumbnailUrl} username={props.post.username} />

			{/* Image Container - consists of posted image  */}
			<ImageContainer imageUrl={props.post.imageUrl} />

			{/* Time Stamp Container - consists of time stamp */}
			<TimeStampContainer timestamp={props.post.timestamp} />

			{/* Comment Section Container - all comments related stuff */}
			<CommentSection comments={props.post.comments} likes={props.post.likes} />
		</div>
	);
}

PostContainer.propTypes = {
	post: PropTypes.shape({
		username: PropTypes.string.isRequired,
		thumbnailUrl: PropTypes.string.isRequired,
		imageUrl: PropTypes.string.isRequired,
		likes: PropTypes.number.isRequired,
		timestamp: PropTypes.string.isRequired,
		comments: PropTypes.array.isRequired
	}).isRequired
};
