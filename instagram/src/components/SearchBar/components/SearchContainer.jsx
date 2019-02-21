import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

//css
import "../SearchBar.css";

export default function SearchContainer(props) {
	const searchValue = props.searchValue;
	const handleSearch = event => props.handleSearch(event.target.value);

	return (
		<StyledSearchContainer>
			<input value={searchValue} onChange={handleSearch} className="searchbar-input" placeholder="Search" />
		</StyledSearchContainer>
	);
}

SearchContainer.propTypes = {
	searchValue: PropTypes.string.isRequired,
	handleSearch: PropTypes.func.isRequired
};

const StyledSearchContainer = styled.div`
	width: 50%;
	display: flex;
	justify-content: center;
	align-items: center;

	input {
		padding: 9px 25px;
		background-color: #fafafa;
		border: 1px solid #dbdbdb;

		&::placeholder {
			text-align: center;
			color: #dbdbdb;
			font-size: 0.9rem;
		}
	}
`;
