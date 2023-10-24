import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import ImageGallery from './ImageGallery';
import Searchbar from './Searchbar';
import Button from './Button';
import Loader from './Loader';
import { getImages } from './api';

const App = () => {
  const [imageName, setImageName] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const perPage = 12;

  useEffect(() => {
    if (imageName === '') {
      return;
    }

    setLoading(true);

    getImages(imageName, page, perPage)
      .then(res => {
        setImages(prevImages => [...prevImages, ...res.data.hits]);
      })
      .catch(error => console.log(error))
      .finally(() => setLoading(false));
  }, [imageName, page]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleChangeName = imageName => {
    setImageName(imageName);
    setPage(1);
    setImages([]);
  };

  return (
    <>
      <Searchbar onSubmit={handleChangeName} />

      <ImageGallery images={images} />

      {images.length === 0 && !loading && (
        <h2 style={{ textAlign: 'center' }}>No images for view</h2>
      )}

      {loading && <Loader />}

      {images.length >= perPage &&
        images.length % perPage === 0 &&
        !loading && <Button onClick={loadMore} />}

      <ToastContainer />
    </>
  );
};

export default App;
