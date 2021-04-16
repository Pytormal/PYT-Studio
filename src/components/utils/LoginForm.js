import React from 'react';
import axios from 'axios';
// import { Link, Route, Switch } from 'react-router-dom';

class LoginForm extends React.Component {
	state = {
		credentials: {
			username: '',
			password: '',
		},
	};

	handleChange = (e) => {
		this.setState({
			credentials: {
				...this.state.credentials,
				[e.target.name]: e.target.value,
			},
		});
	};

	login = (e) => {
		e.preventDefault();
		axios
			.post('http://localhost:9500/api/login', this.state.credentials)
			.then((res) => {
				localStorage.setItem('token', res.data.payload);
			
			})
			.catch((err) => console.error('cannot login to server: ', err.message));
	};

	render() {
		return (
			<div>
				<form
					onSubmit={(this.login)}
				>
					<input
						type='username'
						name='username'
						value={this.state.credentials.username}
						onChange={this.handleChange}
					/>
					<input
						type='password'
						name='password'
						value={this.state.credentials.password}
						onChange={this.handleChange}
					/>

					<button>Login</button>
				</form>
			</div>
		);
	}
}

export default LoginForm;
