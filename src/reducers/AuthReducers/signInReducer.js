import {
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT_SUCCESS,
} from "../../actions/types";

const initialState = {
  data: null,
  status: null,
  isSignedIn: false,
};

const signInReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
        isSignedIn: true,
      };
    case SIGN_IN_FAILURE:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
        isSignedIn: false,
      };
    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        data: null,
        status: null,
        isSignedIn: false,
      };
    default:
      return { ...state };
  }
};

export default signInReducer;
