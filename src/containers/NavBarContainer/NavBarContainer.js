import { connect } from "react-redux";
import NavBar from "../../components/NavBar/NavBar";
import { requestSignOut } from "../../actions";

const mapStateToProps = ({ signInState }) => {
  return { signInState };
};

export default connect(mapStateToProps, { requestSignOut })(NavBar);
