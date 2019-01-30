import React from "react";

const LoginButton = props => {
  return <button onClick={props.onClick}>Login</button>;
};

const LogoutButton = props => {
  return <button onClick={props.onClick}>Logout</button>;
};

export { LoginButton, LogoutButton };
