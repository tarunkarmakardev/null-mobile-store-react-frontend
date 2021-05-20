import React, { Component } from "react";
import Card from "../Card/Card";
import MobileSpecs from "./MobileSpecs";
import Loader from "../Loader/Loader";
import MobileListFilter from "./MobileListFilter";

export default class MobileList extends Component {
  componentDidMount() {
    this.props.fetchMobileList({});
  }
  filterList = (values) => {
    this.props.fetchMobileList(values);
    console.log(values);
  };
  renderCards = (data) => {
    return data.map(
      ({
        id,
        name: mobileName,
        brand: { name: brandName },
        price,
        color,
        ram,
        rom,
      }) => {
        const info = { price, color, ram, rom };
        return (
          <Card key={id} heading={`${brandName}: ${mobileName}`}>
            <MobileSpecs info={info} />
          </Card>
        );
      }
    );
  };
  render() {
    // console.log(this.props);
    const {
      mobileList: { data, status },
      loading,
      brandList: { data: brands },
    } = this.props;

    if (loading) {
      return <Loader />;
    }

    if (!data) {
      return (
        <div className="container border shadow d-flex flex-wrap justify-content-center align-items-center p-2">
          <h3 className="text-center">No record found!</h3>
        </div>
      );
    }

    if (status === 200) {
      return (
        <>
          <div className="container border shadow-sm d-flex flex-column justify-content-center align-items-center p-4">
            <h1 className="text-center">All mobiles</h1>
            <h6>Filter Items:</h6>
            <MobileListFilter onSubmit={this.filterList} brands={brands} />
          </div>

          <div className="container border shadow d-flex flex-wrap justify-content-center align-items-center p-2">
            {this.renderCards(data)}
          </div>
        </>
      );
    }

    return null;
  }
}
