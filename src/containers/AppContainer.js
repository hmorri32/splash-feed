import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  fetchFeaturedPhotos,
  storeFeaturedPhotos,
  preLoad,
  generatorFetch
} from "../actions/feedActions";

const mapStateToProps = state => {
  return {
    featured: state.FeaturedPhotos.photos
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { fetchFeaturedPhotos, storeFeaturedPhotos, preLoad, generatorFetch },
    dispatch
  );
};

export default connect(mapStateToProps, mapDispatchToProps);
