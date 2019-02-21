import React from "react";

export default function authenticate(Component, LoginComponent) {
	return class Authenticate extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
				loginName: "",
				loginPassword: "",
				isAuthed: false
			};
		}

		login = () => {
			localStorage.setItem("isAuthed", "true");
			let isAuthed = !!localStorage.getItem("isAuthed");
			this.setState({ isAuthed });
		};

		logout = () => {
			localStorage.setItem("isAuthed", "false");
			this.setState({ isAuthed: false });
		};

		handleAddNameInput = input => {
			this.setState({
				loginName: input
			});
			localStorage.setItem("loginName", JSON.stringify({ input }));
		};

		handleAddPasswordInput = input => {
			this.setState({
				loginPassword: input
			});
			localStorage.setItem("loginPassword", JSON.stringify({ input }));
		};

		componentDidMount() {
			const isAuthed = !!localStorage.getItem("isAuthed");
			this.setState({ isAuthed });
		}

		// componentDidUpdate() {
		// 	const isAuthed = !!localStorage.getItem("isAuthed");
		// 	if (this.state.isAuthed !== isAuthed) {
		// 		this.setState({ isAuthed });
		// 	}
		// }

		render() {
			if (this.state.isAuthed) {
				return <Component {...this.props} logout={this.logout} username={this.state.loginName} />;
			}
			return (
				<LoginComponent
					{...this.props}
					login={this.login}
					handleAddPasswordInput={this.handleAddPasswordInput}
					handleAddNameInput={this.handleAddNameInput}
					loginName={this.state.loginName}
					loginPassword={this.state.loginPassword}
				/>
			);
		}
	};
}
