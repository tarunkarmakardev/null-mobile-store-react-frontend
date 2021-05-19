import { connect } from "react-redux";
import { requestSignIn } from "../../actions";
import SignIn from "../../components/Auth/SignIn";
import { AUTH_RESET } from "../../actions/types";

const mapStateToProps = ({ signInState, loadingState: { loading } }) => {
  return { signInState, loading };
};
const mapDispatchToProps = (dispatch) => {
  return {
    requestSignIn: (values) => dispatch(requestSignIn(values)),
    resetAuth: () => dispatch({ type: AUTH_RESET }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
