import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchFeaturedPhotos, storeFeaturedPhotos } from "../actions/feedActions";

const mapStateToProps = state => {
  return {
    featured: state.FeaturedPhotos.photos
  }
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ fetchFeaturedPhotos, storeFeaturedPhotos }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps);