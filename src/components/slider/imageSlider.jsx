import React, { useState, useEffect } from 'react';
import './imageSlider.css';

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const length = images.length;

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + length) % length);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 3000); // 3 segundos para rolagem automática
    return () => clearInterval(interval);
  }, [currentIndex]);

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  return (
    <div className="slider">
      <h1 className="title">Slider Desafio Xlow</h1>
      <div
        className="slider-wrapper"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            className={`slide ${index === currentIndex ? 'active' : ''}`}
            key={index}
          >
            <a href={image.link} target="_blank" rel="noopener noreferrer">
              <img src={image.url} alt={image.alt} className="image" />
            </a>
          </div>
        ))}
      </div>
      <div className="left-arrow" onClick={prevSlide}>
        &#8249;
      </div>
      <div className="right-arrow" onClick={nextSlide}>
        &#8250;
      </div>
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
