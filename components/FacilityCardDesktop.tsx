// components/FacilityCardDesktop.tsx
import React from 'react';

interface FacilityCardDesktopProps {
  title: string;
  description: string;
  imageUrl: string;
}

const FacilityCardDesktop: React.FC<FacilityCardDesktopProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="facility-card-desktop">
      <img src={imageUrl} alt={title} className="facility-image" />
      <div className="facility-info">
        <h3 className="facility-title">{title}</h3>
        <p className="facility-description">{description}</p>
      </div>
    </div>
  );
};

export default FacilityCardDesktop;
