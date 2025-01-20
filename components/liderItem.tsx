// components/SliderItem.tsx
import React from 'react';

interface SliderItemProps {
  image: string;
  title: string;
  description: string;
}

const SliderItem: React.FC<SliderItemProps> = ({ image, title, description }) => {
  return (
    <div className="slider-item">
      <img src={image} alt={title} className="slider-image" />
      <div className="slider-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default SliderItem;
