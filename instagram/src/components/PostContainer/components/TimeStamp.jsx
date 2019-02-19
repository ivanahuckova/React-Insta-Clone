import React from "react";
import PropTypes from "prop-types";

//css
import "../PostContainer.css";

export default function TimeStamp(props) {
	const timestamp = props.timestamp;
	return <div className="timestamp">{timestamp}</div>;
}

TimeStamp.prototype = {
	timestamp: PropTypes.string.isRequired
};
