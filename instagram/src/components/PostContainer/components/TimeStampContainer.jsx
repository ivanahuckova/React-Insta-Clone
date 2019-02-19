import React from "react";
import PropTypes from "prop-types";

//css
import "../PostContainer.css";

export default function TimeStampContainer(props) {
	const timestamp = props.timestamp;
	return <div className="timestamp">{timestamp}</div>;
}

TimeStampContainer.prototype = {
	timestamp: PropTypes.string.isRequired
};
