import React, { Component } from 'react';

import ImageGallery from './ImageGallery';
import Searchbar from './Searchbar';
import Button from './Button';
import Loader from './Loader';
import { getImages } from './api';

class App extends Component {
  state = {
    imageName: '',
    images: [],
    page: 1,
    loading: false,
    error: null,
    perPage: 12,
  };

  getImages = () => {
    this.setState({ loading: true });
    getImages(this.state.imageName, this.state.page, this.state.perPage)
      .then(res =>
        this.setState(({ images }) => ({
          images: [...images, ...res.data.hits],
        }))
      )
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.imageName !== this.state.imageName &&
      prevState.imageName !== this.state.page
    ) {
      this.getImages();
    }
  }

  loadMore = () => {
    this.setState(({ page }) => ({
      page: page + 1,
    }));
  };

  handleChangeName = imageName => {
    this.setState({ imageName, page: 1, images: [] }, this.getImages);
  };

  render() {
    const { loading, images, perPage } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleChangeName} />

        <ImageGallery images={images} />

        {images.length === 0 && !loading && (
          <h2 style={{ textAlign: 'center' }}>No images for showing</h2>
        )}

        {loading && <Loader />}

        {images.length >= perPage &&
          images.length % perPage === 0 &&
          !loading && <Button onClick={this.loadMore} />}
      </>
    );
  }
}

export default App;
