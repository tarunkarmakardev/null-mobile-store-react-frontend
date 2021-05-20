import {
  FETCH_BRAND_LIST_SUCCESS,
  FETCH_BRAND_LIST_FAILURE,
} from "../../actions/types";

const initialState = {
  data: [],
  status: null,
};

const fetchBrandListReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BRAND_LIST_SUCCESS:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
      };
    case FETCH_BRAND_LIST_FAILURE:
      return {
        ...state,
        data: action.payload.data,
        status: action.payload.status,
      };
    default:
      return { ...state };
  }
};

export default fetchBrandListReducer;
