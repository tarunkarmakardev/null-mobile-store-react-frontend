import { connect } from "react-redux";
import { fetchMobileList } from "../../actions";
import MobileList from "../../components/MobileLIst/MobileList";

const mapStateToProps = ({ mobileList }) => {
  return { mobileList };
};

export default connect(mapStateToProps, { fetchMobileList })(MobileList);
