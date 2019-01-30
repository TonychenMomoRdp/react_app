import React from "react";
import ReactDOM from "react-dom";
import HelloWorld from "./components/HelloWorld";
import HelloName from "./components/HelloName";
import Clock from "./components/Clock";
import ClockHook from "./components/ClockHook";
import TagLink from "./components/TagLink";
import TagButton from "./components/TagButton";
import TagButton2 from "./components/TagButton2";
import TagButton3 from "./components/TagButton3";
import LoginControl from "./components/LoginControl/LoginControl";

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
      <TagButton2 />
      <TagButton3 />
      <LoginControl />
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
