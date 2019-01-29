import React from "react";
import ReactDOM from "react-dom";
import HelloWorld from "./components/HelloWorld";
import HelloName from "./components/HelloName";
import Clock from "./components/Clock";
import ClockHook from "./components/ClockHook";
import TagLink from "./components/TagLink";
import TagButton from "./components/TagButton";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <HelloWorld />
      <HelloName name="Tony" />
      <Clock />
      <ClockHook />
      <TagLink />
      <TagButton />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
