import {
  ADD_MOBILE_SUCCESS,
  ADD_MOBILE_FAILURE,
  LOADING_TRUE,
  LOADING_FALSE,
} from "../types";
import { refreshToken } from "../AuthActions/refreshToken";
import mobileStore from "../../api/mobileStore";

const addMobile = (values) => async (dispatch) => {
  dispatch({
    type: LOADING_TRUE,
  });

  await dispatch(refreshToken());

  const { mobileName, brandName, color, price, ram, rom } = values;
  const data = {
    brand: {
      name: brandName,
    },
    name: mobileName,
    color,
    price,
    ram,
    rom,
  };
  try {
    const access = localStorage.getItem("access");
    const response = await mobileStore.post(
      "/api/products/",
      JSON.stringify(data),
      {
        headers: {
          Authorization: `Bearer ${access}`,
        },
      }
    );
    dispatch({ type: ADD_MOBILE_SUCCESS, payload: response });
  } catch (error) {
    dispatch({
      type: ADD_MOBILE_FAILURE,
      payload: error.response,
    });
  }
  dispatch({ type: LOADING_FALSE });
};

export { addMobile };
