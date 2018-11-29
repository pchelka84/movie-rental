import React, { Component } from "react";
import Input from "./input";

class LoginForm extends Component {
  state = {
    account: { username: "", password: "" },
    errors: {}
  };

  // Validating the entire form
  validate = () => {
    const errors = {};

    const { account } = this.state;
    if (account.username.trim() === "")
      errors.username = "Username is required.";

    if (account.password.trim() === "")
      errors.password = "Password is required.";

    return Object.keys(errors).length === 0 ? null : errors;
  };

  handleSubmit = e => {
    // prevents submittin gform to a server
    // which causes the full page reload
    e.preventDefault();

    const errors = this.validate();
    console.log(errors);
    // erros should never be null
    this.setState({ errors: errors || {} });
    if (errors) return;

    // call the server
    console.log("Submitted");
  };

  // Validating only one input
  validateProperty = ({ name, value }) => {
    if (name === "username") {
      if (value.trim() === "") return "Username is required.";
      // ...
    }
    if (name === "password") {
      if (value.trim() === "") return "Password is required.";
      // ...
    }
  };

  handleChange = ({ currentTarget: input }) => {
    const errors = { ...this.state.errors };
    const errorMeassage = this.validateProperty(input);
    if (errorMeassage) errors[input.name] = errorMeassage;
    else delete errors[input.name];

    const account = { ...this.state.account };
    account[input.name] = input.value;

    this.setState({ account: account, errors });
  };

  render() {
    const { account, errors } = this.state;
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          <Input
            name="username"
            value={account.username}
            label="Username"
            onChange={this.handleChange}
            error={errors.username}
          />
          <Input
            name="password"
            value={account.password}
            label="Password"
            onChange={this.handleChange}
            error={errors.password}
          />
          <button className="btn btn-primary">Login</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
