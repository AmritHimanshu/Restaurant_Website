import React from 'react';

const Slider = ({ images }) => {
  return (
    <div className="slider-container">
      <div className="slider overflow-x-scrol">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Slider;
