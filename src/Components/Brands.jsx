import React from 'react';
const brandImages = [
  'Brands1.png',
  'Brands2.webp',
  'Brands3.jpg',
  'Brands4.webp',
  
];

const Brands = () => {
  return (
    <div className="brands-container">
      <h2 className="brands-heading">Shop by Brands</h2>
      <div className="brands-scroll">
        {brandImages.map((img, index) => (
          <div className="brand-card" key={index}>
            <img src={img} alt={`Brand ${index + 1}`} className="brand-image" />
            <p className="brand-name">Demand Agro Seeds</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Brands;
