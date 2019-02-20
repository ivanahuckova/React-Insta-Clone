import React, { Component } from "react";
import PostsPage from "./components/PostContainer/PostsPage";
import "./App.css";

export default class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <PostsPage />;
	}
}
