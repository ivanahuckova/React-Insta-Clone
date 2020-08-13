import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

//components
import UserPostHeading from "./components/UserPostHeading";
import ImageContainer from "./components/ImageContainer";
import TimeStamp from "./components/TimeStamp";
import CommentSection from "../CommentSection/CommentSection";

export default function PostContainer(props) {
	return (
		<StyledPostContainer>
			{/* User Heading Contaienr - consists of name and thumbnail image of user  */}
			<UserPostHeading thumbnailUrl={props.post.thumbnailUrl} username={props.post.username} />

			{/* Image Container - consists of posted image  */}
			<ImageContainer imageUrl={props.post.imageUrl} />

			{/* Time Stamp Container - consists of time stamp */}
			<TimeStamp timestamp={props.post.timestamp} />

			{/* Comment Section Container - all comments related stuff */}
			<CommentSection comments={props.post.comments} likes={props.post.likes} username={props.username} />
		</StyledPostContainer>
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
	}).isRequired,
	username: PropTypes.string
};

const StyledPostContainer = styled.div`
	background-color: white;
	margin-bottom: 50px;
	border: 1px solid #dbdbdb;
`;
