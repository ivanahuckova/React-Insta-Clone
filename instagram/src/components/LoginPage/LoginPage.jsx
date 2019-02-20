import React from "react";

export default function LoginPage(props) {
	const login = () => props.login();
	const handleAddNameInput = event => props.handleAddNameInput(event.target.value);
	const handleAddPasswordInput = event => props.handleAddPasswordInput(event.target.value);
	const loginName = props.loginName;
	const loginPassword = props.loginPassword;
	return (
		<form onSubmit={login}>
			Name: <input value={loginName} onChange={handleAddNameInput} />
			Password: <input value={loginPassword} onChange={handleAddPasswordInput} />
			<button>Submit</button>
		</form>
	);
}
