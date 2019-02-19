import React, { Component } from "react";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";
import "./App.css";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dummyData: [],
			searchValue: ""
		};
	}

	componentDidMount() {
		this.setState({
			dummyData: dummyData
		});
	}

	handleSearch = input => {
		this.setState({
			searchValue: input
		});
	};

	render() {
		return (
			<div>
				{/* Search Bar */}
				<SearchBar searchValue={this.state.searchValue} handleSearch={this.handleSearch} />
				<div className="environment-container">
					<div className="app-container">
						{/* Post Container + filter/search logic */}
						{this.state.dummyData.map(post => {
							if (post.username.indexOf(this.state.searchValue) === -1) {
								return null;
							}
							return <PostContainer post={post} key={post.timestamp} />;
						})}
					</div>
				</div>
			</div>
		);
	}
}
