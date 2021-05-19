import React, { Component } from "react";
import AuthForm from "./AuthForm";
import Alert from "../Alert/Alert";
import { Redirect } from "react-router";
import Loader from "../Loader/Loader";

export default class Signup extends Component {
  componentDidMount() {
    this.props.resetAuth();
  }
  handleOnSubmit = (values) => {
    this.props.requestSignUp(values);
  };
  render() {
    const {
      signUpState,
      signUpState: { status },
      loading,
    } = this.props;
    if (loading) {
      return <Loader />;
    }
    if (status >= 400) {
      return (
        <div
          className="container border shadow p-4"
          style={{ minheight: "30vh" }}
        >
          <h1>Sign Up</h1>
          <AuthForm signup onSubmit={this.handleOnSubmit} />
          <div className="mt-4">
            <Alert
              type="danger"
              text={signUpState.data.username[0] || signUpState.data.message}
            />
          </div>
        </div>
      );
    }
    if (status === 201) {
      return (
        <Redirect
          to={{
            pathname: "/signin",
            message: "Account Created Successfully. Login Now!",
          }}
        />
      );
    }
    return (
      <div
        className="container border shadow p-4"
        style={{ minheight: "30vh" }}
      >
        <h1>Sign Up</h1>
        <AuthForm signup onSubmit={this.handleOnSubmit} />
      </div>
    );
  }
}
