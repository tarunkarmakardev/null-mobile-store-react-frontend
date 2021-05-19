import {
  FETCH_MOBILE_LIST_SUCCESS,
  FETCH_MOBILE_LIST_FAILURE,
  LOADING_TRUE,
  LOADING_FALSE,
} from "../types";

const fetchMobileList =
  ({ brand = null, minPrice = null, maxPrice = null }) =>
  (dispatch) => {
    dispatch({
      type: LOADING_TRUE,
    });
    let mobileList = JSON.parse(localStorage.getItem("mobileList"));

    if (mobileList) {
      if (brand) {
        mobileList = mobileList.filter((item) => {
          return item.brandName === brand;
        });
      }
      if (minPrice) {
        mobileList = mobileList.filter((item) => {
          return item.info.price >= parseInt(minPrice);
        });
      }
      if (maxPrice) {
        mobileList = mobileList.filter((item) => {
          return item.info.price <= parseInt(maxPrice);
        });
      }
      dispatch({ type: FETCH_MOBILE_LIST_SUCCESS, payload: mobileList });
      dispatch({ type: LOADING_FALSE });
    } else {
      dispatch({ type: FETCH_MOBILE_LIST_FAILURE, payload: mobileList });
      dispatch({ type: LOADING_FALSE });
    }
  };

export { fetchMobileList };
