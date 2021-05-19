import React, { Component } from "react";
import reactDom from "react-dom";

export default class Loader extends Component {
  render() {
    const { text } = this.props;
    return reactDom.createPortal(
      <div
        className="modal fade show"
        style={{
          display: "block",
          backgroundColor: "rgba(60,60,60,0.5)",
          overflowY: "hidden",
        }}
      >
        <div
          className="modal-dialog d-flex flex-column justify-content-center align-items-center text-primary"
          style={{ height: "100%" }}
        >
          <div
            className="spinner-border "
            role="status"
            style={{ width: "3rem", height: "3rem" }}
          ></div>
          <span className="fs-4 mt-2">{text || "Loading"}</span>
        </div>
      </div>,
      document.getElementById("modal")
    );
  }
}
