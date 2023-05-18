import { useState } from 'react';
import PrevBtn from '../../images/icon-previous.svg';
import NextBtn from '../../images/icon-next.svg';
import Close from '../../images/icon-close.svg';

import './Modal.css';

const Modal = ({ product: { img, thumbnail, name } }) => {
  const [isOpen, setIsOpen] = useState(false);

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % img.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex + img.length - 1) % img.length);
  };

  return (
    <div className="modal__container">
      {img && (
        <>
          <img
            src={img[currentIndex]}
            alt={`Image of ${name}.`}
            className="modal__img"
            onClick={() => setIsOpen(true)}
          />

          <div className="modal__thumbnails__container__carousel">
            {thumbnail.map((thumb, i) => (
              <label
                htmlFor={i}
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={
                  currentIndex === i
                    ? 'modal__thumbnail--active modal__thumbnail'
                    : 'modal__thumbnail'
                }
              >
                <img
                  src={thumb}
                  className="modal__thumbnail__img"
                />
                <input
                  type="radio"
                  name="thumbnail"
                  id={i}
                  value={i}
                />
              </label>
            ))}
          </div>

          {/* Modal */}
          <div className={isOpen ? 'modal__overlay' : 'modal__overlay--hidden'}>
            <div className="modal__content">
              <button
                className="close__modal"
                onClick={() => setIsOpen(false)}
              >
                <img
                  src={Close}
                  alt="Close icon"
                  className="svg__icon close__modal__icon"
                />
              </button>

              <div>
                <img
                  src={img[currentIndex]}
                  alt={`Image of ${name}.`}
                  className="modal__img__carousel"
                />

                <div className="modal__buttons">
                  <button
                    onClick={prevSlide}
                    className="carousel__btn btn-prev-modal"
                  >
                    <img
                      src={PrevBtn}
                      alt="Previus button icon."
                    />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="carousel__btn btn-next-modal"
                  >
                    <img
                      src={NextBtn}
                      alt="Next button icon."
                    />
                  </button>
                </div>
              </div>

              <div className="modal__thumbnails__container">
                {thumbnail.map((thumb, i) => (
                  <label
                    htmlFor={i}
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={
                      currentIndex === i
                        ? 'modal__thumbnail--active modal__thumbnail'
                        : 'modal__thumbnail'
                    }
                  >
                    <img
                      src={thumb}
                      className="modal__thumbnail__img"
                    />
                    <input
                      type="radio"
                      name="thumbnail"
                      id={i}
                      value={i}
                    />
                  </label>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Modal;
