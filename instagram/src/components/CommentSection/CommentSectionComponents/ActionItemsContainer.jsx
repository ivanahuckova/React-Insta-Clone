import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

//css
import "../CommentSection.css";

export default function ActionItemsContainer(props) {
	const toggleLike = () => props.toggleLike();
	const didLike = props.didLike;
	return (
		<StyledIconsContainer>
			{/*heart images + logic for red heart/heart outline image*/}
			<StyledCommentIcons
				onClick={toggleLike}
				className={didLike ? "display-none" : "display-true"}
				src="/assets/heart-icon.svg"
				alt="instagram icon"
			/>
			<StyledCommentIcons
				onClick={toggleLike}
				className={!didLike ? "display-none" : "display-true"}
				src="/assets/heart-red-icon.svg"
				alt="instagram icon"
			/>

			{/*bubble image*/}
			<StyledCommentIcons src="/assets/bubble-icon.svg" alt="instagram icon" />
		</StyledIconsContainer>
	);
}

ActionItemsContainer.propTypes = {
	toggleLike: PropTypes.func,
	didLike: PropTypes.bool
};

const StyledIconsContainer = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const StyledCommentIcons = styled.img`
	width: 7%;
	height: 7%;
	padding: 10px 10px 10px 0;
	margin-left: -10px;
	cursor: pointer;
`;
