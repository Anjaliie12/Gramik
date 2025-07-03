import React from 'react';
const products = [
  'save1image.png',
  'Save2.image.png',
  'save3.image.png',
  'save4.iamge.png',
  'save5.image.png',
  'save6.image.png',
  'save1image.png',
  'Save2.image.png',
  'save3.image.png',
  'save4.iamge.png',
];

const TopSelling = () => {
  return (
    <div className="top-container">
      <h2 className="heading"></h2>
      <div className="scroll-row">
        {products.map((img, index) => (
          <div className="product-card" key={index}>
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

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const TopSelling = () => {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.post('http://localhost:5000/api/product', {
//         slug: 'top-selling-products' 
//       });

//       setProducts(response.data.products || []);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

//   return (
//     <div className="top-container">
//       <h2 className="heading">Top Selling</h2>
//       <div className="scroll-row">
//         {products.map((product, index) => (
//           <div className="product-card" key={index}>
//             <img
//               src={product.image || 'placeholder.png'} 
//               alt={product.name || `Product ${index + 1}`}
//               className="product-img"
//             />
//             <div className="product-info">
//               <h6>{product.name || 'Product Name'}</h6>
//               <p>
//                 <span className="old-price">Rs.{product.mrp}</span>
//                 <span className="new-price">Rs.{product.price}</span>
//               </p>
//               <button className="add-btn">
//                 <span className="icon">+</span>
//                 <span>Add</span>
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TopSelling;
