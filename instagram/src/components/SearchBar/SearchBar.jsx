import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

//components
import LogosContainer from "./components/LogosContainer";
import SearchContainer from "./components/SearchContainer";
import ActionItemsContainer from "./components/ActionItemsContainer";

export default function SearchBar(props) {
	return (
		<StyledEnvironmentContainer>
			<StyledSearchBar>
				{/* Left part of the navbar - logos */}
				<LogosContainer />
				{/* Middle part of navbar - search bar */}
				<SearchContainer searchValue={props.searchValue} handleSearch={props.handleSearch} />
				{/* Right part of navbar - action items icons */}
				<ActionItemsContainer logout={props.logout} />
			</StyledSearchBar>
		</StyledEnvironmentContainer>
	);
}

SearchBar.propTypes = {
	searchValue: PropTypes.string.isRequired,
	handleSearch: PropTypes.func.isRequired,
	logout: PropTypes.func
};

const StyledSearchBar = styled.div`
	width: 70%;
	display: flex;
	justify-content: space-between;
	flex-direction: row;
`;

const StyledEnvironmentContainer = styled.div`
	box-sizing: border-box;
	background-color: white;
	width: 100%;
	height: 70px;
	position: fixed;
	display: flex;
	justify-content: center;
	border-bottom: 1px solid #dbdbdb;
	top: 0;
`;
