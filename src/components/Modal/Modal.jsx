/*import React, { Component } from 'react';
import css from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.closeModalEsc);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.closeModalEsc);
  }

  closeModalEsc = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  closeModalBackdrop = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };

  render() {
    const { largeImg, tag } = this.props;
    return (
      <div onClick={this.closeModalBackdrop} className={css.overlay}>
        <div className={css.modal}>
          <img src={largeImg} alt={tag} />
        </div>
      </div>
    );
  }
}

export default Modal;*/
/*
import React, { useEffect } from 'react';
import css from './Modal.module.css';

function Modal({ largeImg, tag, closeModal }) {
  const closeModalEsc = (e) => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  const closeModalBackdrop = (e) => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', closeModalEsc);

    return () => {
      window.removeEventListener('keydown', closeModalEsc);
    };
  }, []);

  return (
    <div onClick={closeModalBackdrop} className={css.overlay}>
      <div className={css.modal}>
        <img src={largeImg} alt={tag} />
      </div>
    </div>
  );
}

export default Modal;*/
import React, { useEffect } from 'react';
import css from './Modal.module.css';

function Modal({ largeImg, tag, closeModal }) {
  const closeModalEsc = (e) => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  const closeModalBackdrop = (e) => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', closeModalEsc);

    return () => {
      window.removeEventListener('keydown', closeModalEsc);
    };
  }, [closeModalEsc]); // Додайте closeModalEsc до залежностей
  // При цьому, якщо closeModalEsc не змінюється, можна використовувати пустий масив залежностей ([]), якщо він не залежить від інших значень або стану.

  return (
    <div onClick={closeModalBackdrop} className={css.overlay}>
      <div className={css.modal}>
        <img src={largeImg} alt={tag} />
      </div>
    </div>
  );
}
export default Modal;
