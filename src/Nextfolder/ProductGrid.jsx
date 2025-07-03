import React from 'react';

const ProductGrid = ({ products }) => {
  return (
    <div className="product-grid">
      {products.map((prod, index) => (
        <div className="product-card" key={index}>
          <img src={prod.image} alt={prod.name} />
          <p className="price">
            <s>₹{prod.originalPrice}</s> <span>₹{prod.discountedPrice}</span>
          </p>
          <p>{prod.name}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
