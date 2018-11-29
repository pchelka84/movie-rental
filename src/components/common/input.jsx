import React from "react";

const Input = ({ name }) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>Username</label>
      <input
        value={account.username}
        onChange={this.handleChange}
        autoFocus
        id={name}
        name={name}
        type="text"
        className="form-control"
      />
    </div>
  );
};

export default Input;
props;
