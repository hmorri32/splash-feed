import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export const Photo = ({ src, id, title }) => {
  return (
    <div className="photo-card">
      {title ?
        <Link to={`/photo/${id}`} className="photo-link">
          <img src={src} alt="featured" />
          <p>{title}</p>
        </Link>
        : <img src={src} alt="featured" /> }
    </div>
  );
};

Photo.propTypes = {
  src: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.number,
  photo: PropTypes.object
};
