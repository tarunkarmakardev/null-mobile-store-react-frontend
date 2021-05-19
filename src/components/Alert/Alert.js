import React, { Component } from "react";

export default class Alert extends Component {
  render() {
    const { type, text } = this.props;
    return (
      <div className={`alert alert-${type || "primary"}`} role="alert">
        {text}
      </div>
    );
  }
}
