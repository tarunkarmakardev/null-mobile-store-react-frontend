import React, { Component } from "react";
import Card from "../Card/Card";
import MobileListFilter from "./MobileListFilter";
import MobileSpecs from "./MobileSpecs";

export default class MobileList extends Component {
  componentDidMount() {
    this.props.fetchMobileList({});
  }
  filterList = (values) => {
    this.props.fetchMobileList(values);
  };
  renderCards = (data) => {
    return data.map(({ id, mobileName, brandName, info }) => {
      return (
        <Card key={id} heading={`${brandName}: ${mobileName}`}>
          <MobileSpecs info={info} />
        </Card>
      );
    });
  };
  render() {
    const {
      mobileList: { data },
    } = this.props;

    if (!data) {
      return (
        <div className="container border shadow d-flex flex-wrap justify-content-center align-items-center p-2">
          <h3 className="text-center">No record found!</h3>
        </div>
      );
    }

    return (
      <>
        <div className="container border shadow-sm d-flex flex-column justify-content-center align-items-center p-4">
          <h1 className="text-center">All mobiles</h1>
          <h6>Filter Items:</h6>
          <MobileListFilter onSubmit={this.filterList} />
        </div>

        <div className="container border shadow d-flex flex-wrap justify-content-center align-items-center p-2">
          {this.renderCards(data)}
        </div>
      </>
    );
  }
}
