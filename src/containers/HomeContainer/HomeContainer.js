import { connect } from "react-redux";
import Home from "../../components/Home/Home";
import { refreshToken } from "../../actions";

const mapStateToProps = ({ signInState: { isSignedIn } }) => {
  return { isSignedIn };
};

export default connect(mapStateToProps, { refreshToken })(Home);
