import React from "react";

const Greeting = props => {
  const UserGreeting = props => {
    return <h1>Welcome back!</h1>;
  };

  const GuestGreeting = props => {
    return <h1>Please sign up.</h1>;
  };

  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
};

export default Greeting;
