import React from "react";
import ReactDOM from "react-dom";
import { Sandbox, withDependencies } from "react-sandbox-editor";

const ReactSandbox = withDependencies([
  "https://unpkg.com/react@16.6.0/umd/react.development.js",
  "https://unpkg.com/react-dom@16.6.0/umd/react-dom.development.js"
])(Sandbox);

const jsxCode = `const { Chip, Avatar } = window["material-ui"]
 
ReactDOM.render(
    <Chip
        avatar={<Avatar>MB</Avatar>}
        label="Clickable Chip"
        onClick={() => alert("Chip Clicked!")}
    />,
    document.getElementById('root')
);`;

class App extends React.Component {
  onTabClick = (event, tabName) => {
    console.log(tabName);
  };

  onPlayButtonClick = event => {
    console.log("Play button clicked!");
  };

  onCodeChange = (editorName, value) => {
    console.log(`Code in ${editorName} editor has changed: ${value}`);
  };

  render() {
    return (
      <ReactSandbox
        theme="solarized_dark"
        scriptEditor={{
          defaultValue: jsxCode,
          mode: "jsx",
          readOnly: false,
          wrapLines: true
        }}
        templateEditor={{
          defaultValue: '<div id="root"></div>',
          mode: "html",
          readOnly: false,
          wrapLines: true
        }}
        stylesheetEditor={{
          defaultValue: "body { background: pink; }",
          mode: "css",
          readOnly: false,
          wrapLines: true
        }}
        executeOnCodeChange={true}
        executeOnCodeChangeDebounce={1000}
        onTabClick={this.onTabClick}
        displayMode="horizontal-split"
        hideDisplayModeButton
        horizontalSplitOffset={60}
        onPlayButtonClick={this.onPlayButtonClick}
        onCodeChange={this.onCodeChange}
        permissions={[
          "allow-forms",
          "allow-pointer-lock",
          "allow-popups",
          "allow-modals",
          "allow-same-origin",
          "allow-scripts",
          "allow-top-navigation"
        ]}
        dependencies={[
          "https://unpkg.com/@material-ui/core@3.0.0/umd/material-ui.development.js"
        ]}
      />
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
