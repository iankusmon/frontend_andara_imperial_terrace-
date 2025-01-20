"use client";
// components/Map2D.tsx
import React, { useState } from 'react';

const Map2D: React.FC = () => {
  const [clickedSection, setClickedSection] = useState<string | null>(null);

  const handleHover = (event: React.MouseEvent) => {
    const target = event.target as HTMLDivElement;
    target.style.backgroundColor = "rgba(0, 123, 255, 0.3)"; // Warna saat di-hover
  };

  const handleMouseOut = (event: React.MouseEvent) => {
    const target = event.target as HTMLDivElement;
    target.style.backgroundColor = ""; // Kembalikan warna saat keluar hover
  };

  const handleClick = (section: string) => {
    setClickedSection(section);
    alert(`Anda mengklik bagian: ${section}`);
  };

  return (
    <div className="map-container" style={{ position: 'relative', width: '800px', height: '600px' }}>
      <div
        className="map-section"
        style={{
          position: 'absolute',
          top: '50px',
          left: '100px',
          width: '100px',
          height: '100px',
          backgroundColor: 'lightblue',
          cursor: 'pointer',
        }}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseOut}
        onClick={() => handleClick('Restoran')}
      >
        Restoran
      </div>

      <div
        className="map-section"
        style={{
          position: 'absolute',
          top: '200px',
          left: '250px',
          width: '120px',
          height: '80px',
          backgroundColor: 'lightgreen',
          cursor: 'pointer',
        }}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseOut}
        onClick={() => handleClick('Taman')}
      >
        Taman
      </div>

      <div
        className="map-section"
        style={{
          position: 'absolute',
          top: '400px',
          left: '150px',
          width: '80px',
          height: '100px',
          backgroundColor: 'lightcoral',
          cursor: 'pointer',
        }}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseOut}
        onClick={() => handleClick('Parkir')}
      >
        Parkir
      </div>

      <div
        className="map-section"
        style={{
          position: 'absolute',
          top: '300px',
          left: '400px',
          width: '140px',
          height: '120px',
          backgroundColor: 'lightyellow',
          cursor: 'pointer',
        }}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseOut}
        onClick={() => handleClick('Kolam')}
      >
        Kolam
      </div>

      <div className="status">
        {clickedSection && <p>Bagian yang Anda klik: {clickedSection}</p>}
      </div>
    </div>
  );
};

export default Map2D;
