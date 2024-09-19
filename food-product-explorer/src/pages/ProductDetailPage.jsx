import React from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';

const ProductDetailPage = () => {
  const { barcode } = useParams();

  return (
    <div>
      <h1>Product Detail</h1>
      <ProductDetail barcode={barcode} />
    </div>
  );
};

export default ProductDetailPage;
