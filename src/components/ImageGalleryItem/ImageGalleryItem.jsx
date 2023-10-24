import { useState } from 'react';
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
