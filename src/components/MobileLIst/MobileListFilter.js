import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";

class MobileListFilter extends Component {
  onFormSubmission = (values) => {
    this.props.onSubmit(values);
  };
  renderSelect = (values) => {
    const { input, label, options } = values;
    return (
      <div className="col-12">
        <label className="visually-hidden">{label}</label>
        <select className="form-select text-capitalize" {...input}>
          <option defaultValue value="">
            Select a Brand
          </option>
          {options.map(({ id, name }) => {
            return (
              <option key={id} value={name}>
                {name}
              </option>
            );
          })}
        </select>
      </div>
    );
  };
  renderField = (values) => {
    const { input, type, label } = values;
    return (
      <>
        <div className="col-12">
          <label className="visually-hidden">{label}</label>
          <input
            {...input}
            type={type}
            className={`form-control`}
            placeholder={label}
          />
        </div>
      </>
    );
  };
  render() {
    // console.log(this.props);
    const { handleSubmit, reset, brands } = this.props;
    return (
      <form
        className="row row-cols-lg-auto g-3 align-items-center"
        onSubmit={handleSubmit(this.onFormSubmission)}
      >
        <Field
          label="Brand"
          name="brand"
          type="select"
          options={brands}
          component={this.renderSelect}
        />
        <Field
          label="Min. Price (INR)"
          name="minPrice"
          type="number"
          component={this.renderField}
        />
        <Field
          label="Max. Price (INR)"
          name="maxPrice"
          type="number"
          component={this.renderField}
        />

        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <div className="col-12">
          <button onClick={reset} className="btn btn-danger">
            Clear
          </button>
        </div>
      </form>
    );
  }
}

export default reduxForm({ form: "MobileListFilter" })(MobileListFilter);
