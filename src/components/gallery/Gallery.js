import React from "react";
import PropTypes from "prop-types";
import find from "../app/assets/find.png";

export const Gallery = ({ flex, morePhotos, renderFeatured }) => {
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
  renderFeatured: PropTypes.func
};