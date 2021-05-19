import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class NavLinkItem extends Component {
  render() {
    const { to, name } = this.props;
    return (
      <li className="nav-item">
        <NavLink to={to} className="nav-link">
          {name}
        </NavLink>
      </li>
    );
  }
}
