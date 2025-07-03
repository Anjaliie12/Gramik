import React from 'react';
const ProductFertilizer = ({image,name,originalPrice,discountedPrice,onAdd}) => {
  return (
    <div className="fertilizer-cart">
      {image ?<img src={image} alt={name} className='fertilizer-image' />:null}
      <p className="fertilizer-name">{name}</p>
      <p className="fertilizer-price">
        <span className="originalPrice">Rs.{originalPrice}</span>
        <span className="discountedprice">Rs.{discountedPrice}</span>
      </p>
      <button className="fertilizer-add-btn" onClick={onAdd}>
        <span className="btn-icon">+</span>
        <span className="btn-text">Add</span>
      </button>
    </div>
   )
 }
export default ProductFertilizer;
