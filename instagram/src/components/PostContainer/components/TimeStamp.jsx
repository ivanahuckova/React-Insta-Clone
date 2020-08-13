import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export default function TimeStamp(props) {
	const timestamp = props.timestamp;
	return <StyledTimeStamp>{timestamp}</StyledTimeStamp>;
}

TimeStamp.prototype = {
	timestamp: PropTypes.string.isRequired
};

const StyledTimeStamp = styled.div`
	color: #b9b8b7;
	font-weight: lighter;
	padding: 20px 0 0 10px;
`;
