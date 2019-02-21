import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

//css
import "../CommentSection.css";

export default function LikesContainer(props) {
	const likes = props.likes;
	return <StyledLikes>{likes} likes</StyledLikes>;
}

LikesContainer.prototype = {
	likes: PropTypes.number
};

const StyledLikes = styled.div`
	font-weight: bold;
	padding-bottom: 10px;
`;
