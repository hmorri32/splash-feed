import { connect } from "react-redux";

const mapStateToProps = state => {
  return {
    featured: state.FeaturedPhotos.photos
  };
};

export default connect(mapStateToProps, null);
