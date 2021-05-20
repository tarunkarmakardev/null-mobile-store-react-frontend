import React, { Component } from "react";
import { Redirect } from "react-router";

export default class Home extends Component {
  componentDidMount() {
    const { isSignedIn, refreshToken } = this.props;
    const refresh = localStorage.getItem("refresh");
    if (!isSignedIn && refresh) {
      refreshToken();
    }
  }
  render() {
    return <Redirect to="/listing" />;
  }
}
