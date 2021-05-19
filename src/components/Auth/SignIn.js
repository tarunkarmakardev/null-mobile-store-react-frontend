import React, { Component } from "react";
import AuthForm from "./AuthForm";
import Alert from "../Alert/Alert";
import { Redirect } from "react-router";
import Loader from "../Loader/Loader";

export default class SignIn extends Component {
  componentDidMount() {
    this.props.resetAuth();
  }
  handleOnSubmit = (values) => {
    this.props.requestSignIn(values);
  };
  render() {
    const {
      location: { message: redirectMessage },
      signInState: { status, isSignedIn, data },
      loading,
    } = this.props;

    if (loading) {
      return <Loader />;
    }

    if (status >= 400) {
      return (
        <div
          className="container border shadow p-4"
          style={{ minHeight: "30vh" }}
        >
          <h1>Sign In</h1>
          <AuthForm signin onSubmit={this.handleOnSubmit} />
          <div className="mt-4">
            <Alert type="danger" text={data.detail} />
          </div>
        </div>
      );
    }

    if (status === 200 && isSignedIn) {
      return <Redirect to="/" />;
    }
    if (redirectMessage) {
      return (
        <div
          className="container border shadow p-4"
          style={{ minHeight: "30vh" }}
        >
          <h1>Sign In</h1>
          <AuthForm signin onSubmit={this.handleOnSubmit} />
          <div className="mt-4">
            <Alert type="success" text={redirectMessage} />
          </div>
        </div>
      );
    }
    return (
      <div
        className="container border shadow p-4"
        style={{ minHeight: "30vh" }}
      >
        <h1>Sign In</h1>
        <AuthForm signin onSubmit={this.handleOnSubmit} />
      </div>
    );
  }
}
