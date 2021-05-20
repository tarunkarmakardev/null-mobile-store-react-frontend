import React, { Component } from "react";
import AdminForm from "./AdminForm";
import Alert from "../Alert/Alert";
import Loader from "../Loader/Loader";

export default class Admin extends Component {
  state = {
    showAlert: false,
  };
  componentDidMount() {
    this.setState({ showAlert: false });
  }
  handleOnSubmit = (values) => {
    this.setState({ showAlert: true });
    this.props.addMobile({ ...values });
  };
  render() {
    const { showAlert } = this.state;
    const { loading } = this.props;
    if (loading) {
      return <Loader />;
    }
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
