import { connect } from "react-redux";
import {
  fetchMobileList,
  fetchBrandList,
  filterMobileList,
} from "../../actions";
import MobileList from "../../components/MobileLIst/MobileList";

const mapStateToProps = ({
  mobileList,
  loadingState: { loading },
  brandList,
}) => {
  return { mobileList, loading, brandList };
};

export default connect(mapStateToProps, {
  fetchMobileList,
  fetchBrandList,
  filterMobileList,
})(MobileList);
