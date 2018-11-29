import React from "react";

const Input = props => {
  return (
    <div className="form-group">
      <label htmlFor={props.name}>Username</label>
      <input
        value={account.username}
        onChange={this.handleChange}
        autoFocus
        id={props.name}
        name={props.name}
        type="text"
        className="form-control"
      />
    </div>
  );
};

export default Input;
props;
