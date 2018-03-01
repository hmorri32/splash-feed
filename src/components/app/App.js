import React, { Component } from "react";
import PropTypes from "prop-types";
import { Route } from "react-router-dom";
import AppContainer from "../../containers/AppContainer";
import PhotoDetail from "../photoDetail/PhotoDetail";
import { generateUrl } from "../../helpers/helper";
import { Header } from "../header/Header";
import { Gallery } from "../gallery/Gallery";
import { StyleGuide } from "../styleGuide/StyleGuide";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.generator = generateUrl();
    this.state = {
      e: "",
      flex: false,
      active: 1
    };
  }

  componentDidMount() {
    this.generator.next();
    const { fetchFeaturedPhotos, storeFeaturedPhotos } = this.props;
    fetchFeaturedPhotos()
      .then(data => data.json())
      .then(json => storeFeaturedPhotos(json))
      .catch(e => this.setState({ e: e }));
  }

  morePhotos() {
    const { value } = this.generator.next();
    const { generatorFetch } = this.props;
    generatorFetch(value);
  }

  handleActive(id) {
    const { active } = this.state;
    this.setState({ active: id });
    let newFlex = active === 1 ? true : false;
    this.setState({ flex: newFlex });
  }

  // renderFeatured() {
  //   const { featured } = this.props;
  //   return featured.map((photo, i) => {
  //     return (
  //       <div key={i} className="photo-card">
  //         <img src={photo.cover_photo.urls.raw} alt="featured" />
  //         <p>{photo.title}</p>
  //       </div>
  //     );
  //   });
  // }

  render() {
    const { flex, active } = this.state;
    return (
      <div className="App">
        <Header active={active} handleActive={id => this.handleActive(id)} />
        <Route
          exact path="/"
          render={() => (
            <Gallery
              flex={flex}
              morePhotos={() => this.morePhotos()}
              featured={this.props.featured}
            />
          )}
        />
        <Route path="/style-guide" component={StyleGuide} />
        <Route exact path="/photo/:id"
          render={({ match }) => <PhotoDetail match={match} />}
        />
      </div>
    );
  }
}

App.propTypes = {
  fetchFeaturedPhotos: PropTypes.func,
  storeFeaturedPhotos: PropTypes.func,
  generatorFetch: PropTypes.func,
  featured: PropTypes.array
};

export default AppContainer(App);
