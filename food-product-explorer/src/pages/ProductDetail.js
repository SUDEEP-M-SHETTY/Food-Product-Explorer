import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../pages/ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetails = async () => {
      try {
        const response = await fetch(`https://world.openfoodfacts.org/api/v0/product/${id}.json`);
        const data = await response.json();
        setProduct(data.product);
      } catch (error) {
        console.error("Error fetching product details:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProductDetails();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div className="product-detail">
      <h1>{product.product_name}</h1>
      {product.image_url && <img src={product.image_url} alt={product.product_name} className="product-image" />}
      <div className="details">
        <h3>Ingredients:</h3>
        <p>{product.ingredients_text || 'N/A'}</p>
        <h3>Nutritional Values:</h3>
        <p><strong>Energy:</strong> {product.nutriments?.energy || 'N/A'}</p>
        <p><strong>Fat:</strong> {product.nutriments?.fat || 'N/A'}</p>
        <p><strong>Carbs:</strong> {product.nutriments?.carbohydrates || 'N/A'}</p>
        <p><strong>Proteins:</strong> {product.nutriments?.proteins || 'N/A'}</p>
        <p><strong>Barcode:</strong> {product.code || 'N/A'}</p>
        <h3>Labels:</h3>
        <p>{Array.isArray(product.labels) ? product.labels.join(', ') : 'N/A'}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
