import React, { Component } from "react";

export default class MobileSpecs extends Component {
  render() {
    const {
      info: { ram, rom, color, price },
    } = this.props;
    return (
      <ul className="list-group">
        <li className="list-group-item">
          <strong>RAM: </strong> {ram} <span className="text-muted">GBs</span>
        </li>
        <li className="list-group-item">
          <strong>ROM: </strong> {rom} <span className="text-muted">GBs</span>
        </li>
        <li className="list-group-item">
          <strong>Color: </strong> {color}
        </li>
        <li className="list-group-item">
          <strong>Price: </strong> {price}
        </li>
      </ul>
    );
  }
}
