import React from "react";
import "./SearchBar.css";

export default function SearchBar(props) {
	return (
		<div className="searchbar-container">
			<div className="searchbar-left-container">
				<img
					className="searchbar-logo-symbol"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Instagram_simple_icon.svg/2000px-Instagram_simple_icon.svg.png"
					alt="instagram logo"
				/>
				<img
					className="searchbar-logo-name"
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
					alt="instagram name logo"
				/>
			</div>
			<div className="searchbar-middle-container">
				<input className="searchbar-input" placeholder="🔍Search" />
			</div>
			<div className="searchbar-right-container">
				<img className="searchbar-icon" src="https://www.freeiconspng.com/uploads/compass-icon-5.png" alt="instagram icon" />
				<img className="searchbar-icon" src="https://www.freeiconspng.com/uploads/heart-outline-19.png" alt="instagram icon" />
				<img
					className="searchbar-icon"
					src="https://www.freeiconspng.com/uploads/person-outline-icon-png-person-outline-icon-png-person-17.png"
					alt="instagram icon"
				/>
			</div>
		</div>
	);
}
