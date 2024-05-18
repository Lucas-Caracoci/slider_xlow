import React, { useState, useEffect } from 'react';
import styles from './imageSlider.module.css';

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
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  if (!Array.isArray(images) || images.length <= 0) {
    return null;
  }

  return (
    <div className={styles.slider}>
      <h1 className={styles.title}>Slider Desafio Xlow</h1>
      <div
        className={styles.sliderWrapper}
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div
            className={`${styles.slide} ${index === currentIndex ? styles.active : ''}`}
            key={index}>
            <a href={image.link} target="_blank" >
              <img src={image.url} alt={image.alt} className={styles.image} />
            </a>
          </div>
        ))}
      </div>
      <div className={styles.leftArrow} onClick={prevSlide}>
        &#8249;
      </div>
      <div className={styles.rightArrow} onClick={nextSlide}>
        &#8250;
      </div>
      <div className={styles.navigation}>
        {images.map((_, index) => (
          <span
            key={index}
            className={`${styles.dot} ${index === currentIndex ? styles.active : ''}`}
            onClick={() => goToSlide(index)}></span>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
