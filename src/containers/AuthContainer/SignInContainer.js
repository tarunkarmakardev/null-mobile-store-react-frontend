import { connect } from "react-redux";
import { requestSignIn } from "../../actions";
import SignIn from "../../components/Auth/SignIn";

const mapStateToProps = ({ signInState, loadingState: { loading } }) => {
  return { signInState, loading };
};

export default connect(mapStateToProps, { requestSignIn })(SignIn);
