import {
  FETCH_MOBILE_LIST_SUCCESS,
  LOADING_TRUE,
  LOADING_FALSE,
} from "../types";

const filterMobileList =
  ({ brand = null, minPrice = null, maxPrice = null }) =>
  (dispatch, getState) => {
    dispatch({
      type: LOADING_TRUE,
    });
    console.log(getState().mobileList.data);
    let mobileList = getState().mobileList.data;
    if (brand) {
      mobileList = mobileList.filter((item) => {
        return item.brand.name === brand;
      });
    }
    if (minPrice) {
      mobileList = mobileList.filter((item) => {
        return item.price >= parseInt(minPrice);
      });
    }
    if (maxPrice) {
      mobileList = mobileList.filter((item) => {
        return item.price <= parseInt(maxPrice);
      });
    }
    dispatch({
      type: FETCH_MOBILE_LIST_SUCCESS,
      payload: { data: mobileList, status: 200 },
    });
    dispatch({ type: LOADING_FALSE });
  };

export { filterMobileList };
