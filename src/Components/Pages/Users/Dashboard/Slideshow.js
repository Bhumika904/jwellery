import React, { useState, useEffect } from 'react';
import '../../../Assets/CSS/Slideshow.css';

const Slider = ({ images, autoplayDelay }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Auto-play functionality
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, autoplayDelay);

    return () => clearInterval(timer);
  }, [images.length, autoplayDelay]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider-container">
      <div className="slider-track" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="slide">
            <img src={image} width='1470px' height='400px' alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="slider-navigation">
        {images.map((_, index) => (
          <button
            key={index}
            className={`slider-button ${index === currentIndex ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
