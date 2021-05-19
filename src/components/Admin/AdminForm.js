import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class AdminForm extends Component {
  onFormSubmission = (values) => {
    this.props.onSubmit(values);
    this.props.reset();
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
        <div className="col-12 col-md-6">
          <div>
            <label className="form-label">{label}</label>
            {values.helpText ? (
              <span className="form-text ms-2">({values.helpText})</span>
            ) : null}

            <input
              {...input}
              type={type}
              className={`form-control ${touched && error && "is-invalid"}`}
            />
          </div>
          {touched && error && (
            <div className="invalid-feedback" style={{ display: "block" }}>
              {label} is required
            </div>
          )}
        </div>
      </>
    );
  };
  required = (value) => {
    return value ? undefined : "required";
  };

  render() {
    const { handleSubmit } = this.props;
    return (
      <form onSubmit={handleSubmit(this.onFormSubmission)}>
        <div className="row g-3">
          <Field
            label="Mobile's name"
            name="mobileName"
            type="text"
            component={this.renderField}
            validate={this.required}
          />
          <Field
            label="Brand's name"
            name="brandName"
            type="text"
            component={this.renderField}
            validate={this.required}
          />
          <Field
            label="Price"
            helpText="in INR"
            name="price"
            type="number"
            component={this.renderField}
            validate={this.required}
          />
          <Field
            label="Color"
            name="color"
            type="text"
            component={this.renderField}
            validate={this.required}
          />
          <Field
            label="RAM size"
            helpText="in GBs"
            name="ram"
            type="number"
            component={this.renderField}
            validate={this.required}
          />
          <Field
            label="ROM size"
            helpText="in GBs"
            name="rom"
            type="number"
            component={this.renderField}
            validate={this.required}
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary mt-4 ">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default reduxForm({ form: "adminForm" })(AdminForm);
