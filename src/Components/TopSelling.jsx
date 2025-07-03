import React from 'react';
const products = [
  'save1image.png',
  'Save2.image.png',
  'save3.image.png',
  'save4.iamge.png',
  'save3.image.png',
  'save4.iamge.png',
  
];

const TopSelling = () => {
  return (
    <div className="top-container">
      <h2 className="heading">This Week's Trending Products</h2>
      <div className="scroll-row">
        {products.map((img, index) => (
          <div className="product-card-2" key={index}>
            <img src={img} alt={`Product ${index + 1}`} className="product-img" />
            <div className="product-info">
              <h6>Gramo Rhizza Mycorhizal Biofertilizer</h6>
              <p>
                <span className="old-price">Rs.1,150</span>
                <span className="new-price">Rs.600</span>
              </p>
              <button className="add-btn">
                <span className="icon">+</span>
                <span>Add</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopSelling;
