import React, { useEffect, useState } from 'react';
import { getProductByBarcode } from '../services/openFoodFacts';

const ProductDetail = ({ barcode }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const data = await getProductByBarcode(barcode);
        setProduct(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchProduct();
  }, [barcode]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching product details: {error.message}</p>;

  return (
    <div>
      <img src={product.imageUrl || 'https://via.placeholder.com/200'} alt={product.name} />
      <h2>{product.name}</h2>
      <p>Ingredients: {product.ingredients ? product.ingredients.join(', ') : 'N/A'}</p>
      <p>Nutritional Values:</p>
      <ul>
        <li>Energy: {product.nutritionalValues.energy || 'N/A'}</li>
        <li>Fat: {product.nutritionalValues.fat || 'N/A'}</li>
        <li>Carbohydrates: {product.nutritionalValues.carbohydrates || 'N/A'}</li>
        <li>Proteins: {product.nutritionalValues.proteins || 'N/A'}</li>
      </ul>
      <p>Labels: {product.labels ? product.labels.join(', ') : 'N/A'}</p>
    </div>
  );
};

export default ProductDetail;
