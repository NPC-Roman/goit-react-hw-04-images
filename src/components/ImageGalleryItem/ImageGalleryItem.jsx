/*import Modal from 'components/Modal';
import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';

class ImageGalleryItem extends Component {
  state = { openModal: false };

  togleModal = () => {
    this.setState(({ openModal }) => ({ openModal: !openModal }));
  };

  render() {
    const { webFormat, tag, largeFormat } = this.props;
    return (
      <>
        <img
          className={css.imageGalleryItemImage}
          src={webFormat}
          alt={tag}
          onClick={this.togleModal}
        />
        {this.state.openModal && (
          <Modal
            closeModal={this.togleModal}
            largeImg={largeFormat}
            tag={tag}
          />
        )}
      </>
    );
  }
}

export default ImageGalleryItem;*/

import React, { useState } from 'react';
import Modal from 'components/Modal';
import css from './ImageGalleryItem.module.css';

function ImageGalleryItem({ webFormat, tag, largeFormat }) {
  const [openModal, setOpenModal] = useState(false);

  const toggleModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <img
        className={css.imageGalleryItemImage}
        src={webFormat}
        alt={tag}
        onClick={toggleModal}
      />
      {openModal && (
        <Modal closeModal={toggleModal} largeImg={largeFormat} tag={tag} />
      )}
    </>
  );
}

export default ImageGalleryItem;
