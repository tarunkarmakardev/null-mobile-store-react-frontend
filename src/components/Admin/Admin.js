import React, { Component } from "react";
import AdminForm from "./AdminForm";
import { v4 as uuid } from "uuid";
import Alert from "../Alert/Alert";

export default class Admin extends Component {
  state = {
    showAlert: false,
  };
  componentDidMount() {
    this.setState({ showAlert: false });
  }
  handleOnSubmit = (values) => {
    this.setState({ showAlert: true });
    this.props.addMobile({ ...values, id: uuid() });
  };
  render() {
    const { showAlert } = this.state;
    return (
      <div
        className="container border shadow p-4"
        style={{ minHeight: "40vh" }}
      >
        <h2 className="text-center"> Add a mobile phone </h2>
        <AdminForm onSubmit={this.handleOnSubmit} />
        <div className="mt-4">
          {showAlert ? <Alert text="Submitted!" /> : null}
        </div>
      </div>
    );
  }
}
