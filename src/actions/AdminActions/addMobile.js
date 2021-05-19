import { ADD_MOBILE_SUCCESS, LOADING_TRUE, LOADING_FALSE } from "../types";
import { v4 as uuid } from "uuid";

const addMobile = (values) => (dispatch) => {
  dispatch({
    type: LOADING_TRUE,
  });

  const { id, mobileName, brandName, color, price, ram, rom } = values;
  const mobileData = {
    id,
    mobileName,
    brandName,
    info: {
      color,
      price,
      ram,
      rom,
    },
  };
  const brandData = {
    id: uuid(),
    name: brandName,
  };
  let mobileList = JSON.parse(localStorage.getItem("mobileList")) || [];
  let brandList = JSON.parse(localStorage.getItem("brandList")) || [];
  mobileList.push(mobileData);
  const BrandAlreadyExists = brandList.find(({ name }) => {
    return name === brandData.name;
  });
  if (!BrandAlreadyExists) {
    brandList.push(brandData);
  }
  localStorage.setItem("mobileList", JSON.stringify(mobileList));
  localStorage.setItem("brandList", JSON.stringify(brandList));
  dispatch({ type: ADD_MOBILE_SUCCESS, payload: mobileList });
  dispatch({ type: LOADING_FALSE });
};

export { addMobile };
