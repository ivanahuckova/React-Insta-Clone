import React from "react";

export default function authenticate(Component) {
	return class Authenticate extends React.Component {
		render() {
			return <Component />;
		}
	};
}

/* 
///export function withCounter(Component) {
	return class WithCounter extends React.Component {
		  state = {
			counter: 0,
		  };
  
		  increment = () => {
			this.setState(currState => ({
			  counter: currState.counter + 1,
			}));
		  };
  
		  decrement = () => {
			this.setState(currState => ({
			  counter: currState.counter - 1,
			}));
		  };
  
		  render() {
			return (
	<Component
	  {...this.props}
	  count={this.state.counter}
	  increment={this.increment}
	  decrement={this.decrement}
	/>
			);
		  }
	};
  }
   */
