import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
// import { Link, Route, Switch } from 'react-router-dom';

class LoginForm extends React.Component {
  state = {
    credentials: {
      user_name: "",
      password: "",
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
      .post("http://localhost:9500/api/auth/login", this.state.credentials)
      // .post("/auth/login", this.state.credentials)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
      })
      .catch((err) => console.error("cannot login to server: ", err.message));
  };

  render() {
 
    return (
      <div>
        <form onSubmit={this.login}>
          <label htmlFor="user_name">
            <h4>User Name</h4>
            <div>
              <input
                id="user_name"
                type="user_name"
                name="user_name"
                placeholder="create your username"
                value={this.state.credentials.user_name}
                onChange={this.handleChange}
              />
            </div>
          </label>

          <label htmlFor="password">
            <h4>Password</h4>
            <div>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                value={this.state.credentials.password}
                onChange={this.handleChange}
              />
            </div>
          </label>

          <button>Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
