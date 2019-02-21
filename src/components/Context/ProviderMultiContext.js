import React from "react";

const ThemeContextDefault = React.createContext("default");
const ThemeContextLight = React.createContext("light");
const ThemeContextDark = React.createContext("dark");

class ContextApp extends React.Component {
  render() {
    return (
      <ThemeContextDefault.Provider value="dark">
        <Toolbar />
      </ThemeContextDefault.Provider>
    );
  }
}

function Toolbar(props) {
  return (
    <div>
      <ThemedButtonDefault />
      <ThemedButtonLight />
      <ThemedButtonDark />
    </div>
  );
}

class ThemedButtonDefault extends React.Component {
  static contextType = ThemeContextDefault;
  render() {
    return <button>{this.context}</button>;
  }
}

class ThemedButtonLight extends React.Component {
  static contextType = ThemeContextLight;
  render() {
    return <button>{this.context}</button>;
  }
}

class ThemedButtonDark extends React.Component {
  static contextType = ThemeContextDark;
  render() {
    return <button>{this.context}</button>;
  }
}

export default ContextApp;
