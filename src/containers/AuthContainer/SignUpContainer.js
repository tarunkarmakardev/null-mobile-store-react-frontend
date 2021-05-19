import { connect } from "react-redux";
import { requestSignUp } from "../../actions";
import Signup from "../../components/Auth/SignUp";
import { AUTH_RESET } from "../../actions/types";

const mapStateToProps = ({ signUpState, loadingState: { loading } }) => {
  return { loading, signUpState };
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestSignUp: (values) => dispatch(requestSignUp(values)),
    resetAuth: () => dispatch({ type: AUTH_RESET }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signup);
