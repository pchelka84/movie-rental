import React, { Component } from "react";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" }
  };

  handleSubmit = e => {
    // prevents submittin gform to a server
    // which causes the full page reload
    e.preventDefault();

    // call the server
    console.log("Submitted");
  };

  handleChange = e => {
    const account = { ...this.state.account };
    account.username = e.currentTarget.value;
    this.setState({ account: account });
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              value={this.state.account.username}
              onChange={this.handleChange}
              autoFocus
              id="username"
              type="text"
              className="form-control"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input id="password" type="text" className="form-control" />
          </div>
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
