import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ProductDetailPage = ({ match }) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            const response = await axios.get(`https://world.openfoodfacts.org/api/v0/product/${match.params.id}.json`);
            setProduct(response.data.product);
        };

        fetchProduct();
    }, [match.params.id]);

    if (!product) return <div>Loading...</div>;

    return (
        <div>
            <h2>{product.product_name}</h2>
            <img src={product.image_url} alt={product.product_name} />
            <p>Ingredients: {product.ingredients_text}</p>
            <p>Nutritional Grade: {product.nutrition_grade_fr}</p>
            {/* Add more product details here */}
        </div>
    );
};

export default ProductDetailPage;
