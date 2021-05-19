import { ADD_MOBILE_SUCCESS, ADD_MOBILE_FAILURE } from "../../actions/types";

const initialState = {
  data: null,
};

const addMobileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_MOBILE_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case ADD_MOBILE_FAILURE:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return { ...state };
  }
};

export default addMobileReducer;
