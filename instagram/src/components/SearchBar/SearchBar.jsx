import React from "react";
import PropTypes from "prop-types";

//components
import LogosContainer from "./components/LogosContainer";
import SearchContainer from "./components/SearchContainer";
import ActionItemsContainer from "./components/ActionItemsContainer";

//css
import "./SearchBar.css";

export default function SearchBar(props) {
	return (
		<div className="searchbar-environment-container">
			<div className="searchbar-container">
				{/* Left part of the navbar - logos */}
				<LogosContainer />
				{/* Middle part of navbar - search bar */}
				<SearchContainer searchValue={props.searchValue} handleSearch={props.handleSearch} />
				{/* Right part of navbar - action items icons */}
				<ActionItemsContainer logout={props.logout} />
			</div>
		</div>
	);
}

SearchBar.propTypes = {
	searchValue: PropTypes.string.isRequired,
	handleSearch: PropTypes.func.isRequired,
	logout: PropTypes.func
};
