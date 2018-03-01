import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  fetchSearchedPhotos,
  storeSearchedPhotos
} from "../actions/feedActions";

const mapStateToProps = state => {
  return {
    search: state.Search.photos
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { fetchSearchedPhotos, storeSearchedPhotos },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps);
