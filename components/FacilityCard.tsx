// components/FacilityCard.tsx
import React from 'react';

interface FacilityCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

const FacilityCard: React.FC<FacilityCardProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="facility-card">
      <img src={imageUrl} alt={title} className="facility-image" />
      <div className="facility-info">
        <h3 className="facility-title">{title}</h3>
        <p className="facility-description">{description}</p>
      </div>
    </div>
  );
};

export default FacilityCard;
