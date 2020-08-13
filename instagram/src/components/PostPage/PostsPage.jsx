import React, { Component } from "react";
import dummyData from "../../dummy-data.js";
import styled from "styled-components";

//components
import PostContainer from "../PostContainer/PostContainer";
import SearchBar from "../SearchBar/SearchBar";

export default class PostsPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dummyData: [],
			searchValue: "",
			username: this.props.username
		};
	}

	componentDidMount() {
		this.setState({
			dummyData: dummyData
		});
		localStorage.setItem("dummyData", JSON.stringify(dummyData));
		localStorage.setItem("searchValue", "");
		localStorage.setItem("username", JSON.stringify(this.state.username));
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
				<SearchBar searchValue={this.state.searchValue} handleSearch={this.handleSearch} logout={this.props.logout} />
				<StyledMainPostPageContainer>
					<StyledPostPageContainer>
						{/* Post Container + filter/search logic */}
						{this.state.dummyData.map(post => {
							if (post.username.indexOf(this.state.searchValue) === -1) {
								return null;
							}
							return <PostContainer post={post} key={post.timestamp} username={this.props.username} />;
						})}
					</StyledPostPageContainer>
				</StyledMainPostPageContainer>
			</div>
		);
	}
}

const StyledMainPostPageContainer = styled.div`
	padding-top: 110px;
	width: 100vw;
	display: flex;
	justify-content: center;
	background-color: #fafafa;
`;

const StyledPostPageContainer = styled.div`
	margin: 20px 0;
	width: 50%;
	background-color: white;
`;
