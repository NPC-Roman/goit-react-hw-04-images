import { useEffect, useCallback } from 'react';
import css from './Modal.module.css';

function Modal({ largeImg, tag, closeModal }) {
  const closeModalEsc = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    const closeModalEscListener = e => closeModalEsc(e);

    window.addEventListener('keydown', closeModalEscListener);

    return () => {
      window.removeEventListener('keydown', closeModalEscListener);
    };
  }, [closeModal]);
  /*  const closeModalEsc = useCallback(
    e => {
      if (e.code === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );
*/
  const closeModalBackdrop = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };
  /*
  useEffect(() => {
    window.addEventListener('keydown', closeModalEsc);

    return () => {
      window.removeEventListener('keydown', closeModalEsc);
    };
  }, [closeModalEsc]);
*/
  return (
    <div onClick={closeModalBackdrop} className={css.overlay}>
      <div className={css.modal}>
        <img src={largeImg} alt={tag} />
      </div>
    </div>
  );
}
export default Modal;
