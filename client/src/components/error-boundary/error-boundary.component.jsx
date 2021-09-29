import React from "react";

import "./error-boundary.styles.scss";

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true };
  }

  componentDidCatch(error, info) {
    console.log(error);
  }

  render() {
    if (this.state.hasErrored) {
      return (
        <div className="error-image-overlay">
          <div
            className="error-image-container"
            style={{
              backgroundImage: `url("https://i.imgur.com/FOeYt4E.png")`,
            }}
          />
          <h2 className="error-image-text">
            Sorry, this page is buried in the sand
          </h2>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
