import { connect } from "react-redux";
import { addMobile } from "../../actions";
import Admin from "../../components/Admin/Admin";

const mapStateToProps = ({ addMobileState, loadingState: { loading } }) => {
  return { addMobileState, loading };
};

export default connect(mapStateToProps, { addMobile })(Admin);
