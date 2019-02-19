import React, { Component } from "react";
import dummyData from "./dummy-data";
import PostContainer from "./components/PostContainer/PostContainer";
import SearchBar from "./components/SearchBar/SearchBar";
import "./App.css";

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dummyData: []
		};
	}

	getData() {
		this.setState({
			dummyData: dummyData
		});
	}

	componentDidMount() {
		this.getData();
	}

	render() {
		return (
			<div>
				<SearchBar />
				<div className="environment-container">
					<div className="app-container">
						{this.state.dummyData.map(post => {
							return <PostContainer post={post} key={post.timestamp} />;
						})}
					</div>
				</div>
			</div>
		);
	}
}

// import React, { Component } from 'react';

// class App extends Component {

//   constructor(props){
//     super(props);
//     this.state = {
//       data: 'Jordan Belfort'
//     }
//   }

//   getData(){
//     setTimeout(() => {
//       console.log('Our data is fetched');
//       this.setState({
//         data: 'Hello WallStreet'
//       })
//     }, 1000)
//   }

//   componentDidMount(){

//   }

//   render() {
//     return(
//       <div>
//       {this.state.data}
//     </div>
//     )
//   }
// }

// export default App;
