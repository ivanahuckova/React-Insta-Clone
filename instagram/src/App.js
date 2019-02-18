import React, { Component } from "react";
import "./App.css";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = { dummyData };
	}

	render() {
		return (
			<div className="environment-container">
				<div className="app-container">
					{this.state.dummyData.map(post => {
						return <PostContainer post={post} key={post.timestamp} />;
					})}
				</div>
			</div>
		);
	}
}
