import React from "react";

export class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  //static getDerivedStateFromError(error) {
  // Update state so the next render will show the fallback UI.
  //return { error: error, hasError: true };
  //}

  componentDidCatch(error, errorInfo) {
    //You can also log the error to an error reporting service
    //logErrorToMyService(error, errorInfo);

    // Catch errors in any components below and re-render with error message
    this.setState({ error: error, errorInfo: errorInfo });
  }

  render() {
    if (this.state.errorInfo) {
      // You can render any custom fallback UI
      return (
        <div>
          <h2>Something went wrong.</h2>
          <details style={{ whiteSpace: "pre-wrap" }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }
}

/*
class ErrorClass extends React.Component {
  render() {
    throw new Error("Error");
    return "";
  }
}

export function app() {
  return (
    <div>
      <ErrorBoundary>
        <ErrorClass />
      </ErrorBoundary>
    </div>
  );
}
*/

export default ErrorBoundary;
