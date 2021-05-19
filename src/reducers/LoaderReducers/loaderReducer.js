import { LOADING_TRUE, LOADING_FALSE } from "../../actions/types";

const initialState = {
  loading: false,
};

const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_TRUE:
      return {
        ...state,
        loading: true,
      };
    case LOADING_FALSE:
      return {
        ...state,
        loading: false,
      };
    default:
      return { ...state };
  }
};

export default loaderReducer;
