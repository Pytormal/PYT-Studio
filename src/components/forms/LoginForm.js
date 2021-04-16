import React from 'react';
import axios from 'axios';
// import { Link, Route, Switch } from 'react-router-dom';

class LoginForm extends React.Component {
	state = {
		credentials: {
			userName: '',
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
			.post('http://localhost:9500/api/auth/login', this.state.credentials)
			.then((res) => {
				localStorage.setItem('token', res.data.payload);
			
			})
			.catch((err) => console.error('cannot login to server: ', err.message));
	};

	render() {
		return (
      <div>
        <form onSubmit={this.login}>
          <h4>username</h4>
          <input
            type="userName"
            name="userName"
            value={this.state.credentials.userName}
            onChange={this.handleChange}
          />
          <h4>password</h4>
          <input
            type="password"
            name="password"
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
