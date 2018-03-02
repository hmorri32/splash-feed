import React, { Component } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import GalleryContainer from "../../containers/GalleryContainer";
import find from "../app/assets/find.png";
import { Photo } from "../photo/Photo";
import "./Gallery.css";

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
        <Photo
          src={photo.cover_photo.urls.regular}
          key={i}
          id={photo.id}
          title={photo.title}
        />
      );
    });
  }

  renderSearched() {
    const { search } = this.state;
    return search.map((photo, i) => {
      return <Photo src={photo.urls.regular} key={i} id={photo.id} photo={photo}/>;
    });
  }

  handleSubmit(e, query) {
    const { fetchSearchedPhotos } = this.props;
    e.preventDefault();
    fetchSearchedPhotos(query)
      .then(data => data.json())
      .then(json => this.setState({ search: json.results }));
    this.resetSearch(this);
  }

  clearSearch() {
    this.setState({ search: "" });
  }

  resetSearch(form) {
    form.query.value = "";
  }

  render() {
    const { search } = this.state;
    return (
      <div>
        <form className="form">
          <input
            placeholder="Search"
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
