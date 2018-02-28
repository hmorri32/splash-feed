import React, { Component } from "react";
import PropTypes from "prop-types";
import PhotoDetailContainer from "../../containers/PhotoDetailContainer";
import location from "./assets/location.png";
import "./PhotoDetail.css";

class PhotoDetail extends Component {
  findPhoto() {
    const { featured } = this.props;
    const { id } = this.props.match.params;
    return featured.filter(photo => photo.id === parseInt(id, 10));
  }

  render() {
    const photo = this.findPhoto()[0];
    const { urls, user } = photo.cover_photo;
    return (
      <div className="detail-container">
        <p className="photo-title">{photo.title}</p>
        <img src={urls.raw} alt="featured" className="cover-photo" />
        <img
          src={user.profile_image.large}
          alt="user-profile"
          className="user-profile"
        />
        <p className="user-name">
          {user.first_name} {user.last_name}
        </p>
        {user.location ?
          <p className="user-location"><img src={location} alt="" />{user.location}</p> : ""
        }
        <p className="user-bio">{user.bio}</p>
        <p className="user-handle">@{user.instagram_username}</p>
      </div>
    );
  }
}

PhotoDetail.propTypes = {
  featured: PropTypes.array,
  match: PropTypes.object,
  params: PropTypes.object,
  id: PropTypes.string
};

export default PhotoDetailContainer(PhotoDetail);

// user:
// {…}
// bio:
// "Business and Economics college student with a passion for photography in Grand Rapids, Michigan ✋🏻"
// first_name:
// "Joanna"
// id:
// "MPN_qMVtFsY"
// instagram_username:
// "luminescent.photography"
// last_name:
// "Nix"
// links:
// {…}
// location:
// null
// name:
// "Joanna Nix"
// portfolio_url:
// "https://www.instagram.com/luminescent.photography/"
// profile_image:
// {…}
// total_collections:
// 0
// total_likes:
// 19
// total_photos:
// 56
// twitter_username:
// null
// updated_at:
// "2018-02-27T15:41:05-05:00"
// username:
// "joanna_nix"
