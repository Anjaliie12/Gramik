import React from 'react';
const categories = [
  { img: 'Seeds.webp', name: 'Seeds' },
   { img: 'Nutrients.webp', name: 'Nutrients' },
  { img: 'Pesticides.webp', name: 'Pesticides' },
  { img: 'Nutrients.webp', name: 'Nutrients' },
   { img: 'Seeds.webp', name: 'Seeds' },
   { img: 'Nutrients.webp', name: 'Nutrients' },
 
 
];

const ProductShow = () => {
  return (
    <div className="product-container">
   <h2 className="title"></h2>
      <div className="productshow-scroll">
         {categories.map((category, index) => (
          <div className="product-card" key={index}>
            <img
              src={category.img}
              alt={`Brand ${index + 1}`}
              className="product-image"
            />
            <p className="product-name">{category.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductShow;
