import {
  FETCH_MOBILE_LIST_SUCCESS,
  FETCH_MOBILE_LIST_FAILURE,
  LOADING_TRUE,
  LOADING_FALSE,
} from "../types";
import mobileStore from "../../api/mobileStore";
import { fetchBrandList } from "./fetchBrandList";
// import { refreshToken } from "../AuthActions/refreshToken";

const fetchMobileList =
  ({ brand = null, minPrice = null, maxPrice = null }) =>
  async (dispatch) => {
    dispatch({
      type: LOADING_TRUE,
    });
    await dispatch(fetchBrandList());
    // await dispatch(refreshToken());
    // const access = localStorage.getItem("access");
    // const headers = {
    //   headers: {
    //     Authorization: `Bearer ${access}`,
    //   },
    // };

    try {
      const response = await mobileStore("/api/products/");
      let mobileList = response.data;
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
        payload: {
          data: mobileList,
          status: response.status,
        },
      });
    } catch (err) {
      dispatch({
        type: FETCH_MOBILE_LIST_FAILURE,
        payload: err,
      });
    }
    dispatch({ type: LOADING_FALSE });
  };

export { fetchMobileList };
