import {
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  AUTH_RESET,
} from "../../actions/types";

const initialState = {
  data: null,
  status: null,
};

const signUpReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
      };
    case AUTH_RESET:
      return {
        ...state,
        data: null,
        status: null,
      };
    default:
      return { ...state };
  }
};

export default signUpReducer;
