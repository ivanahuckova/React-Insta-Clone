import React, { Component } from "react";
import Authenticate from "./components/authentication/Authenticate";
import PostsPage from "./components/PostContainer/PostsPage";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return <PostsPage />;
	}
}

const Authenticated = Authenticate(App);
export default Authenticated;
