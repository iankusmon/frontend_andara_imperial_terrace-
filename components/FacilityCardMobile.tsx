// components/FacilityCardMobile.tsx
import React from 'react';

interface FacilityCardMobileProps {
  title: string;
  description: string;
  imageUrl: string;
}

const FacilityCardMobile: React.FC<FacilityCardMobileProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="facility-card-mobile">
      <img src={imageUrl} alt={title} className="facility-image" />
      <div className="facility-info">
        <h3 className="facility-title">{title}</h3>
        <p className="facility-description">{description}</p>
      </div>
    </div>
  );
};

export default FacilityCardMobile;
