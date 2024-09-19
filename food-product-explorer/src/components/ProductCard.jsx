import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    return (
        <div className="product-card">
            <Link to={`/product/${product.id}`}>
                <img src={product.image_url} alt={product.product_name} />
                <h2>{product.product_name}</h2>
                <p>Category: {product.categories}</p>
                <p>Nutritional Grade: {product.nutrition_grade_fr}</p>
            </Link>
        </div>
    );
};

export default ProductCard;
