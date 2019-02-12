import React from "react";

function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">{props.left}</div>
      <div className="SplitPane-right">{props.right}</div>
    </div>
  );
}

function Contacts() {
  return <h1>Contacts</h1>;
}

function Chat() {
  return <h1>Char</h1>;
}

function App() {
  return <SplitPane left={<Contacts />} right={<Chat />} />;
}

export default App;
