import { connect } from "react-redux";
import { addMobile } from "../../actions";
import Admin from "../../components/Admin/Admin";

const mapStateToProps = ({ addMobileState }) => {
  return { addMobileState };
};

export default connect(mapStateToProps, { addMobile })(Admin);
