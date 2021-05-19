import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import addMobileState from "./AdminReducers/addMobileReducer";
import mobileList from "./AdminReducers/fetchMobileListReducer";
import loadingState from "./LoaderReducers/loaderReducer";
import signUpState from "./AuthReducers/signUpReducer";
import signInState from "./AuthReducers/signInReducer";

export default combineReducers({
  form: formReducer,
  addMobileState,
  mobileList,
  loadingState,
  signUpState,
  signInState,
});
