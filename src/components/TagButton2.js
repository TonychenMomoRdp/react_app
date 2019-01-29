import React from "react";

class TagButton2 extends React.Component {
  handleClick = () => {
    console.log("this is:", this);
  };

  render() {
    return <button onClick={this.handleClick}>Click me</button>;
  }
}

export default TagButton2;
