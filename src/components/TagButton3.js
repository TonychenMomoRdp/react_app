import React from "react";

class TagButton3 extends React.Component {
  handleClick() {
    console.log("this is:", this);
  }

  render() {
    return <button onClick={e => this.handleClick(e)}>Click me</button>;
  }
}

export default TagButton3;
