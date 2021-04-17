import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
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
		axiosWithAuth()
      // .post('http://localhost:9500/api/auth/login', this.state.credentials)
      .post("/auth/login")
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
      })
      .catch((err) => console.error("cannot login to server: ", err.message));
	};

	render() {
		return (
      <div>
        <form onSubmit={this.login}>
          <h4>username</h4>
          <input
            id="userName"
            type="userName"
            name="userName"
            placeholder="username"
            value={this.state.credentials.userName}
            onChange={this.handleChange}
          />
          <h4>password</h4>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="Password"
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
