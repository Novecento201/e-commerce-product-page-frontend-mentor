import { useState } from 'react';
import PrevBtn from '../../images/icon-previous.svg';
import NextBtn from '../../images/icon-next.svg';

import './Carousel.css';

const Carousel = ({ product: { name, img } }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % img.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex + img.length - 1) % img.length);
  };

  return (
    <div className="carousel__container">
      {img && (
        <>
          <img
            src={img[currentIndex]}
            alt={`Image of ${name}.`}
            className="carousel__img"
          />
          <button
            onClick={prevSlide}
            className="carousel__btn btn-prev-carousel"
          >
            <img
              src={PrevBtn}
              alt="Previus button icon."
            />
          </button>
          <button
            onClick={nextSlide}
            className="carousel__btn btn-next-carousel"
          >
            <img
              src={NextBtn}
              alt="Next button icon."
            />
          </button>
        </>
      )}
    </div>
  );
};
export default Carousel;
