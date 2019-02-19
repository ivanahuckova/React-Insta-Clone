import React from "react";
import "../SearchBar.css";

export default function SearchContainer(props) {
	const searchValue = props.searchValue;
	const handleSearch = event => props.handleSearch(event.target.value);

	return (
		<div className="searchbar-middle-container">
			<input value={searchValue} onChange={handleSearch} className="searchbar-input" placeholder="Search" />
		</div>
	);
}
