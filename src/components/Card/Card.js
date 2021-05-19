import React, { Component } from "react";

export default class Card extends Component {
  render() {
    const { heading, children } = this.props;

    return (
      <div
        className="card border shadow-sm p-3 mx-2 my-2"
        style={{ width: "18rem" }}
      >
        <h6 className="text-uppercase text-center my-2">{heading}</h6>
        <img
          alt={heading}
          src="https://daisycon.io/images/mobile-device/?width=250&height=250&color=ffffff&ean=190198044211"
          className="card-img-top my-2"
        />
        <div className="card-body text-capitalize">
          <div className="card-text">{children}</div>
        </div>
      </div>
    );
  }
}
