import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class NavButton extends Component {
  render() {
    const { onClick, name, to } = this.props;
    if (to) {
      return (
        <li className="nav-item ms-0 ms-lg-2 mt-2 mt-lg-0">
          <Link to={to} className="btn btn-primary">
            {name}
          </Link>
        </li>
      );
    }
    return (
      <li className="nav-item ms-0 ms-lg-2 mt-2 mt-lg-0">
        <button onClick={onClick} className="btn btn-primary">
          {name}
        </button>
      </li>
    );
  }
}
