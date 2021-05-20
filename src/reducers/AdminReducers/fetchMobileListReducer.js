import {
  FETCH_MOBILE_LIST_SUCCESS,
  FETCH_MOBILE_LIST_FAILURE,
} from "../../actions/types";

const initialState = {
  data: [],
  status: null,
};

const fetchMobileListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOBILE_LIST_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
      };
    case FETCH_MOBILE_LIST_FAILURE:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
      };
    default:
      return { ...state };
  }
};

export default fetchMobileListReducer;
