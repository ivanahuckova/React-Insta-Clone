import React from "react";
import PropTypes from "prop-types";

//css
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

SearchContainer.propTypes = {
	searchValue: PropTypes.string.isRequired,
	handleSearch: PropTypes.func.isRequired
};
