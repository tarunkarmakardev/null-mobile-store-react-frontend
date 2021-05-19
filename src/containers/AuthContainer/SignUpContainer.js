import { connect } from "react-redux";
import { requestSignUp } from "../../actions";
import Signup from "../../components/Auth/SignUp";

const mapStateToProps = ({ signUpState, loadingState: { loading } }) => {
  return { loading, signUpState };
};

export default connect(mapStateToProps, { requestSignUp })(Signup);
