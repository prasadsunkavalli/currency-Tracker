import { Component } from "react";

import "./index.css";

class LoginForm extends Component {
  state = { username: "", password: "", errorMsg: false };

  onChangeUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  login = () => {
    const { username, password } = this.state;
    const getName = localStorage.getItem(username);
    if (getName === null) {
      this.setState({ errorMsg: true });
    } else {
      this.setState({ errorMsg: false });
    }
  };

  register = () => {
    const { history } = this.props;
    history.replace("/register");
  };
  render() {
    const { username, password, errorMsg } = this.state;
    return (
      <div className="login-page">
        <form className="login-form">
          {errorMsg ? (
            <p className="error-msg">Username or Password is Wrong.</p>
          ) : null}
          <label htmlFor="login-name" className="label">
            USERNAME
          </label>
          <input
            type="text"
            id="login-name"
            className="input-block"
            placeholder="Enter Username"
            value={username}
            onChange={this.onChangeUsername}
          />
          <label htmlFor="input-password" className="label">
            PASSWORD
          </label>
          <input
            type="password"
            id="login-password"
            className="input-block"
            placeholder="Enter Password"
            value={password}
            onChange={this.onChangePassword}
          />
          <div className="btn-container">
            <button type="button" className="login-btn" onClick={this.login}>
              Login
            </button>
            <button type="button" className="login-btn" onClick={this.register}>
              Register
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
