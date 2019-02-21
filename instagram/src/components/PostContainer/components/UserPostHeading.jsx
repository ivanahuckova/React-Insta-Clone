import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

//components
import StyledUsername from "../../Styles/Reusables/StyledUsername";

export default function UserPostHeading(props) {
	const username = props.username;
	const thumbnailUrl = props.thumbnailUrl;
	return (
		<StyledUserContainer>
			<StyledThumbnail src={thumbnailUrl} alt="thumbnail of user" />
			<StyledUsername>{username}</StyledUsername>
		</StyledUserContainer>
	);
}

UserPostHeading.prototype = {
	thumbnailUrl: PropTypes.string.isRequired,
	username: PropTypes.string.isRequired
};

const StyledUserContainer = styled.div`
	padding: 20px;
	display: flex;
	justify-content: flex-start;
	align-items: center;
`;

const StyledThumbnail = styled.img`
	margin-right: 10px;
	border-radius: 50%;
	width: 5%;
	height: 5%;
`;
