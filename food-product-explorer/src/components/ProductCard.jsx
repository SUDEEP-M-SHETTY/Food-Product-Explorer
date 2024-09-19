import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <Link to={`/product/${product.code}`}>
        <img src={product.imageUrl || 'https://via.placeholder.com/200'} alt={product.name} />
        <h3>{product.name}</h3>
        <p>{product.category}</p>
        <p>Nutrition Grade: {product.nutritionGrade}</p>
      </Link>
    </div>
  );
};

export default ProductCard;
