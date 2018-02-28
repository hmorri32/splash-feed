import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import find from "../app/assets/find.png";
import {Photo} from "../photo/Photo";

export const Gallery = ({ flex, morePhotos, featured }) => {
  const renderFeatured = () => {
    // const { featured } = this.props;
    return featured.map((photo, i) => {
      return (
        <div key={i} className="photo-card">
          <Photo i={i} photo={photo} />
          <Link to={`/photo/${photo.id}`}>
            <img src={photo.cover_photo.urls.raw} alt="featured" />
            <p>{photo.title}</p>
          </Link>
        </div>
      );
    });
  };
  return (
    <div>
      <div className={flex ? "photo-flex" : "photo-grid"}>
        {renderFeatured()}
      </div>
      <button className="btn get-more" onClick={() => morePhotos()}>
        <img src={find} alt="find-icon" /> Get Photos
      </button>
    </div>
  );
};

Gallery.propTypes = {
  flex: PropTypes.bool,
  morePhotos: PropTypes.func,
  featured: PropTypes.array
};