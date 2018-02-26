import React, { Component } from "react";
import AppContainer from "../../containers/AppContainer";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      e: ""
    };
  }

  componentDidMount() {
    const { fetchFeaturedPhotos, storeFeaturedPhotos } = this.props;
    fetchFeaturedPhotos()
      .then(data => data.json())
      .then(json => storeFeaturedPhotos(json))
      .catch(e => this.setState({ e: e }));
  }

  renderFeatured() {
    const { featured } = this.props;
    return featured.map((photo, i) => {
      console.log(photo);
      return (
        <div key={i} className='photo-card'>
          <p>{photo.title}</p>
          <img src={photo.cover_photo.urls.raw} alt="" />
        </div>
      );
    });
  }

  render() {
    const { featured } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="photo-grid">
          {this.renderFeatured()}
        </div>
      </div>
    );
  }
}

export default AppContainer(App);
