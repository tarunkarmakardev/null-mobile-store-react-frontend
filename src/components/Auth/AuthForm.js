import React, { Component } from "react";
import { Field, reduxForm, SubmissionError } from "redux-form";

class AuthForm extends Component {
  onFormSubmission = (values) => {
    const { signup, signin } = this.props;
    if (signin) {
      this.props.onSubmit(values);
    }
    if (signup && values.password2 !== values.password) {
      throw new SubmissionError({
        password2: "Passwords don't match",
        _error: "Passwords don't match",
      });
    } else {
      this.props.onSubmit(values);
    }
  };
  renderField = (values) => {
    const {
      input,
      type,
      label,
      meta: { error, touched },
    } = values;
    return (
      <>
        <div className="col-12">
          <div>
            <label className="form-label">{label}</label>
            <input
              {...input}
              type={type}
              className={`form-control ${touched && error && "is-invalid"}`}
            />
          </div>
          {touched && error && (
            <div
              className="invalid-feedback text-capitalize"
              style={{ display: "block" }}
            >
              {error === "required" ? `${label} is required!` : error}
            </div>
          )}
        </div>
      </>
    );
  };
  required = (value) => {
    return value ? undefined : "required";
  };
  minLength6 = (value) => {
    return value && value.length < 6
      ? "Must be 6 characters or more"
      : undefined;
  };
  render() {
    // console.log(this.props);
    const { handleSubmit, signin, signup } = this.props;
    if (signin) {
      return (
        <form onSubmit={handleSubmit(this.onFormSubmission)}>
          <Field
            label="Username"
            name="username"
            type="text"
            component={this.renderField}
            validate={this.required}
          />
          <Field
            label="Password"
            name="password"
            type="password"
            component={this.renderField}
            validate={this.required}
          />
          <button type="submit" className="btn btn-primary mt-4">
            Submit
          </button>
        </form>
      );
    }
    if (signup) {
      return (
        <form onSubmit={handleSubmit(this.onFormSubmission)}>
          <Field
            label="Username"
            name="username"
            type="text"
            component={this.renderField}
            validate={this.required}
          />
          <Field
            label="First Name"
            name="first_name"
            type="text"
            component={this.renderField}
            validate={this.required}
          />
          <Field
            label="Last Name"
            name="last_name"
            type="text"
            component={this.renderField}
            validate={this.required}
          />
          <Field
            label="Password"
            name="password"
            type="password"
            component={this.renderField}
            validate={(this.required, this.minLength6)}
          />
          <Field
            label="Confirm Password"
            name="password2"
            type="password"
            component={this.renderField}
            validate={this.required}
          />

          <button type="submit" className="btn btn-primary mt-4">
            Submit
          </button>
        </form>
      );
    }
    return null;
  }
}

export default reduxForm({ form: "authForm" })(AuthForm);
