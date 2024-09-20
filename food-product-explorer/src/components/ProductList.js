import React from 'react';
import { Link } from 'react-router-dom';
import './ProductList.css';

const ProductList = ({ products }) => {
  if (!products || products.length === 0) {
    return <p>No products found.</p>;
  }

  return (
    <div className="product-list">
      {products.map(product => (
        <Link to={`/product/${product.id}`} className="product-card" key={product.id}>
          {product.image_url && <img src={product.image_url} alt={product.product_name} />}
          <h3>{product.product_name}</h3>
          <p>{product.quantity || 'N/A'}</p>
        </Link>
      ))}
    </div>
  );
};

export default ProductList;
