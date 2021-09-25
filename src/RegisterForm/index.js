import { Component } from "react";

import "./index.css";

class RegisterForm extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    errorMsg: false,
  };

  registerUsername = (event) => {
    this.setState({ username: event.target.value });
  };

  registerEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  registerPassword = (event) => {
    this.setState({ password: event.target.value });
  };
  confirmPassword = (event) => {
    this.setState({ confirmPassword: event.target.value });
  };

  registerUser = (event) => {
    event.preventDefault();
    const { username, email, password, confirmPassword } = this.state;

    if (username !== "" && password === confirmPassword) {
      const getUserName = localStorage.getItem(username);
      if (getUserName === null) {
        const create = {
          userName: username,
          Email: email,
          Password: password,
        };
        const stringifyCreate = JSON.stringify(create);
        localStorage.setItem(username, stringifyCreate);
        this.setState({
          userName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      } else {
        this.setState({ errorMsg: true });
      }
    }
  };

  redirectToLogin = () => {
    const { history } = this.props;
    history.replace("/login");
  };

  render() {
    const { errorMsg } = this.state;
    return (
      <div className="login-page">
        <form className="login-form" onSubmit={this.registerUser}>
          <label htmlFor="register-name" className="label">
            USERNAME
          </label>
          <input
            type="text"
            id="register-name"
            className="input-block"
            placeholder="Enter Username"
            onChange={this.registerUsername}
          />
          {errorMsg ? (
            <p className="error-Msg">Username already exist.</p>
          ) : null}
          <label htmlFor="register-email" className="label">
            Gmail
          </label>
          <input
            type="email"
            id="register-email"
            className="input-block"
            placeholder="Enter Gmail"
            onChange={this.registerEmail}
          />

          <label htmlFor="register-password" className="label">
            PASSWORD
          </label>
          <input
            type="password"
            id="register-password"
            className="input-block"
            placeholder="Enter Password"
            onChange={this.registerPassword}
          />
          <label htmlFor="confirm-password" className="label">
            CONFIRM PASSWORD
          </label>
          <input
            type="password"
            id="confirm-password"
            className="input-block"
            placeholder="Confirm Password"
            onChange={this.confirmPassword}
          />
          <div className="btn-container">
            <button type="submit" className="login-btn">
              Register
            </button>
            <button
              type="button"
              className="login-btn"
              onClick={this.redirectToLogin}
            >
              Login
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
