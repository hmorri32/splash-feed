import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import GalleryContainer from "../../containers/GalleryContainer";
import find from "../app/assets/find.png";
// import {Photo} from "../photo/Photo";

class Gallery extends Component {
  constructor() {
    super();
    this.state = {
      search: ""
    };
  }

  componentDidMount() {
    this.clearSearch();
  }

  renderFeatured() {
    const { featured } = this.props;
    return featured.map((photo, i) => {
      return (
        <div key={i} className="photo-card">
          <Link to={`/photo/${photo.id}`} className="photo-link">
            <img src={photo.cover_photo.urls.raw} alt="featured" />
            <p>{photo.title}</p>
          </Link>
        </div>
      );
    });
  }

  renderSearched() {
    const { search } = this.state;
    return search.map((photo, i) => {
      return (
        <div className="photo-card" key={i}>
          <Link to={`/photo/${photo.id}`} className="photo-link">
            <img src={photo.urls.regular} alt="featured" />
          </Link>
        </div>
      );
    });
  }

  handleSubmit(e, query) {
    const { fetchSearchedPhotos, storeSearchedPhotos } = this.props;
    e.preventDefault();
    fetchSearchedPhotos(query)
      .then(data => data.json())
      .then(json => this.setState({ search: json.results }));
    // toreSearchedPhotos(json.results));
    // fetch(`https://api.unsplash.com/search/photos?page=1`)
    // console.log("suh", query);
    // <https://api.unsplash.com/search/photos?page=1&query=office>
  }

  clearSearch() {
    this.setState({ search: "" });
  }

  render() {
    const { search } = this.state;
    return (
      <div>
        <form className="form">
          <input
            ref={input => {
              this.query = input;
            }}
            type="text"
          />
          <button
            type="submit"
            onClick={e => this.handleSubmit(e, this.query.value)}>
            Search
          </button>
        </form>
        <div className={this.props.flex ? "photo-flex" : "photo-grid"}>
          {search.length ? this.renderSearched() : this.renderFeatured()}
        </div>
        {search.length ? (
          <button className="btn get-more" onClick={() => this.clearSearch()}>
            Clear Search
          </button>
        ) : (
          <button
            className="btn get-more"
            onClick={() => this.props.morePhotos()}>
            <img src={find} alt="find-icon" /> Get Photos
          </button>
        )}
      </div>
    );
  }
}

Gallery.propTypes = {
  flex: PropTypes.bool,
  morePhotos: PropTypes.func,
  fetchSearchedPhotos: PropTypes.func,
  storeSearchedPhotos: PropTypes.func,
  featured: PropTypes.array,
  search: PropTypes.array
};

export default GalleryContainer(Gallery);
