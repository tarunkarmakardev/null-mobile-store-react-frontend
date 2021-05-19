import {
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  LOADING_TRUE,
  LOADING_FALSE,
} from "../types";
import mobileStore from "../../api/mobileStore";

const requestSignUp = (values) => async (dispatch) => {
  dispatch({ type: LOADING_TRUE });
  try {
    const response = await mobileStore.post(
      "/api/auth/signup/",
      JSON.stringify(values)
    );
    dispatch({
      type: SIGN_UP_SUCCESS,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: SIGN_UP_FAILURE,
      payload: error.response,
    });
  }
  dispatch({ type: LOADING_FALSE });
};

export { requestSignUp };
