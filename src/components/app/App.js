import React, { Component } from "react";
import AppContainer from "../../containers/AppContainer";
import grid from "./assets/grid.png";
import list from "./assets/list.png";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      e: "",
      flex: false,
      active: 1
    };
  }

  componentDidMount() {
    const { fetchFeaturedPhotos, storeFeaturedPhotos } = this.props;
    // fetchFeaturedPhotos()
    // .then(data => data.json())
    // .then(json => storeFeaturedPhotos(json))
    // .catch(e => this.setState({ e: e }));
  }

  handleActive(id) {
    this.setState({ active: id });
  }

  renderFeatured() {
    const { featured } = this.props;
    return featured.map((photo, i) => {
      return (
        <div key={i} className="photo-card">
          <img src={photo.cover_photo.urls.raw} alt="" />
          <p>{photo.title}</p>
        </div>
      );
    });
  }

  render() {
    const { featured } = this.props;
    const { flex, active } = this.state;

    return (
      <div className="App">
        <header className="barber-header">
          <h1 className="barber-title">My Photos</h1>
          <div className="btns">
            <button
              className={active === 1 ? "btn grid-btn active" : "btn grid-btn"}
              onClick={() => this.handleActive(1)}>
              <img src={grid} alt="" />Grid
            </button>
            <button
              className={active === 2 ? "btn grid-btn active" : "btn grid-btn"}
              onClick={() => this.handleActive(2)}>
              <img src={list} alt="" />List
            </button>
          </div>
        </header>
        <div className={flex ? "photo-flex" : "photo-grid"}>
          {this.renderFeatured()}
        </div>
      </div>
    );
  }
}

export default AppContainer(App);
