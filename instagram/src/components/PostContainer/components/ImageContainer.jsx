import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export default function ImageContainer(props) {
	const imageUrl = props.imageUrl;
	return (
		<StyledImageContainer>
			<StyledImage src={imageUrl} alt="users added" />
		</StyledImageContainer>
	);
}

ImageContainer.prototype = {
	imageUrl: PropTypes.string.isRequired
};

const StyledImageContainer = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
`;

const StyledImage = styled.img`
	width: 100%;
`;
