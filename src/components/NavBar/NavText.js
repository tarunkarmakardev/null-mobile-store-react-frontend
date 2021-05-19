import React, { Component } from "react";

export default class NavText extends Component {
  render() {
    const { text } = this.props;
    return (
      <li className="nav-item ms-0 ms-md-2">
        <span className="text-light text-capitalize fs-5 me-3">{text}</span>
      </li>
    );
  }
}
