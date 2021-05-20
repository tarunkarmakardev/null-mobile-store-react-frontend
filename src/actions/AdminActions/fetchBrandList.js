import {
  FETCH_BRAND_LIST_SUCCESS,
  FETCH_BRAND_LIST_FAILURE,
  LOADING_TRUE,
  LOADING_FALSE,
} from "../types";
import { refreshToken } from "../AuthActions/refreshToken";
import mobileStore from "../../api/mobileStore";

const fetchBrandList = () => async (dispatch) => {
  dispatch({
    type: LOADING_TRUE,
  });
  await dispatch(refreshToken());
  const access = localStorage.getItem("access");
  const headers = {
    headers: {
      Authorization: `Bearer ${access}`,
    },
  };

  try {
    const response = await mobileStore("api/brands/", headers);
    dispatch({
      type: FETCH_BRAND_LIST_SUCCESS,
      payload: response,
    });
  } catch (err) {
    dispatch({
      type: FETCH_BRAND_LIST_FAILURE,
      payload: err,
    });
  }
  dispatch({ type: LOADING_FALSE });
};

export { fetchBrandList };
