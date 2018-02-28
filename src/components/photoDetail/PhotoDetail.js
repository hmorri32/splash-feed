import React, { Component } from "react";
import PropTypes from "prop-types";
import PhotoDetailContainer from "../../containers/PhotoDetailContainer";

class PhotoDetail extends Component {
  findPhoto() {
    const { featured } = this.props;
    const { id } = this.props.match.params;
    return featured.filter((photo) => photo.id === parseInt(id));
  }

  render() {
    const photo = this.findPhoto()[0]

    return <p>{photo.title}</p>;
  }
}

PhotoDetail.propTypes = {
  featured: PropTypes.array,
  match: PropTypes.object,
  params: PropTypes.object,
  id: PropTypes.string
};

export default PhotoDetailContainer(PhotoDetail);