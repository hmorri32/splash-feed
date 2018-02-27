import React, { Component } from "react";
import AppContainer from "../../containers/AppContainer";
import grid from "./assets/grid.png";
import list from "./assets/list.png";
import find from "./assets/find.png";
import { generateUrl } from "../../helpers/helper";
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
    const { value } = this.generator.next();
    const { fetchFeaturedPhotos, storeFeaturedPhotos } = this.props;
    // fetchFeaturedPhotos()
    //   .then(data => data.json())
    //   .then(json => storeFeaturedPhotos(json))
    //   .catch(e => this.setState({ e: e }));
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

  renderFeatured() {
    const { featured } = this.props;
    return featured.map((photo, i) => {
      return (
        <div key={i} className="photo-card">
          <img src={photo.cover_photo.urls.raw} />
          <p>{photo.title}</p>
        </div>
      );
    });
  }

  render() {
    const { flex, active } = this.state;
    return (
      <div className="App">
        <header className="barber-header">
          <h1 className="barber-title">My Photos</h1>
          <div className="btns">
            <button
              className={active === 1 ? "btn grid-btn active" : "btn grid-btn"}
              onClick={() => this.handleActive(1)}>
              <img src={grid} />Grid
            </button>
            <button
              className={active === 2 ? "btn grid-btn active" : "btn grid-btn"}
              onClick={() => this.handleActive(2)}>
              <img src={list} />List
            </button>
          </div>
        </header>
        <div className={flex ? "photo-flex" : "photo-grid"}>
          {this.renderFeatured()}
        </div>
        <button className="btn get-more" onClick={() => this.morePhotos()}>
          <img src={find} /> Get Photos
        </button>
      </div>
    );
  }
}

export default AppContainer(App);
