import React from "react";

//css
import "../SearchBar.css";

export default function LogosContainer(props) {
	return (
		<div className="searchbar-left-container">
			<img className="searchbar-logo-symbol" src="/assets/instagram-logo.png" alt="instagram logo" />
			<img
				className="searchbar-logo-name"
				src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
				alt="instagram name logo"
			/>
		</div>
	);
}
