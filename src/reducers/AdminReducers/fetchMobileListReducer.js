import {
  FETCH_MOBILE_LIST_SUCCESS,
  FETCH_MOBILE_LIST_FAILURE,
} from "../../actions/types";

const initialState = {
  data: [],
};

const fetchMobileListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOBILE_LIST_SUCCESS:
      return {
        ...state,
        data: action.payload,
      };
    case FETCH_MOBILE_LIST_FAILURE:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return { ...state };
  }
};

export default fetchMobileListReducer;
