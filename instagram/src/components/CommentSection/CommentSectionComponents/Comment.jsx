import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import StyledUsername from "../../Styles/Reusables/StyledUsername";

export default function Comment(props) {
	const username = props.comment.username;
	const text = props.comment.text;
	return (
		<StyledCommentBox>
			<StyledUsername>{username} </StyledUsername>
			{text}
		</StyledCommentBox>
	);
}

Comment.propTypes = {
	comment: PropTypes.shape({
		username: PropTypes.string,
		text: PropTypes.string
	}).isRequired
};

const StyledCommentBox = styled.div`
	padding: 10px 0;
	border: 0.5px dashed white;

	input {
		line-height: 1.5;
		border-radius: 5px;
		border: none;
		margin-top: 10px;
	}
`;
