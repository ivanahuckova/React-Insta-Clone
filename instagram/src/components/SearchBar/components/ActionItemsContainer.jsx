import React from "react";
import "../SearchBar.css";

export default function ActionItemsContainer(props) {
	return (
		<div className="searchbar-right-container">
			<img className="searchbar-icon" src="/assets/compass-icon.svg" alt="instagram icon" />
			<img className="searchbar-icon" src="/assets/heart-icon.svg" alt="instagram icon" />
			<img className="searchbar-icon" src="/assets/person-icon.svg" alt="instagram icon" />
		</div>
	);
}
