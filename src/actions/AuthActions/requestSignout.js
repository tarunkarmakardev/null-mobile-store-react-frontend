import { SIGN_OUT_SUCCESS } from "../types";

const requestSignOut = () => (dispatch) => {
  dispatch({
    type: SIGN_OUT_SUCCESS,
  });
  localStorage.removeItem("access");
  localStorage.removeItem("refresh");
};

export { requestSignOut };
