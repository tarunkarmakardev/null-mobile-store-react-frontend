import {
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  LOADING_TRUE,
  LOADING_FALSE,
} from "../types";
import mobileStore from "../../api/mobileStore";

const requestSignIn = (values) => async (dispatch) => {
  dispatch({ type: LOADING_TRUE });
  try {
    const response = await mobileStore.post(
      "/api/auth/signin/token/",
      JSON.stringify(values)
    );
    localStorage.setItem("access", response.data.access);
    localStorage.setItem("refresh", response.data.refresh);
    const userInfo = await mobileStore("/api/auth/user_info/", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("access")}`,
      },
    });
    dispatch({
      type: SIGN_IN_SUCCESS,
      payload: userInfo,
    });
  } catch (error) {
    dispatch({
      type: SIGN_IN_FAILURE,
      payload: error.response,
    });
  }
  dispatch({ type: LOADING_FALSE });
};

export { requestSignIn };
