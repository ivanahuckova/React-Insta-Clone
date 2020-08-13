import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export default function ActionItemsContainer(props) {
	const logout = () => props.logout();
	return (
		<StyledACtionItemsContainer>
			<img className="searchbar-icon" src="/assets/compass-icon.svg" alt="instagram icon" />
			<img className="searchbar-icon" src="/assets/heart-icon.svg" alt="instagram icon" />
			<img className="searchbar-icon" src="/assets/person-icon.svg" alt="instagram icon" />
			<button onClick={logout} />
		</StyledACtionItemsContainer>
	);
}

ActionItemsContainer.propTypes = {
	logout: PropTypes.func
};

const StyledACtionItemsContainer = styled.div`
	width: 20%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	img {
		width: 25%;
		cursor: pointer;
	}
`;
