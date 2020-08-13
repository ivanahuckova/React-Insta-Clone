import React from "react";
import "../CommentSection.css";
import styled from "styled-components";

export default function NewComment(props) {
	const inputCommentValue = props.inputCommentValue;
	const handleAddNewInput = event => {
		props.handleAddNewInput(event.target.value);
	};
	const handleAddNewComment = event => {
		props.addNewComment(inputCommentValue);
		event.preventDefault();
		props.clearInput();
	};

	return (
		<StyledNewComment>
			<form onSubmit={handleAddNewComment}>
				<input value={inputCommentValue} onChange={handleAddNewInput} placeholder="Add new comment..." />
			</form>
		</StyledNewComment>
	);
}

const StyledNewComment = styled.div`
	padding: 10px 0;
	form {
		input {
			width: 100%;
			border: none;
			border-top: 0.5px solid #b9b8b7;
			padding-top: 15px;
			font-size: 0.9rem;
			line-height: 2;
		}
	}
`;
