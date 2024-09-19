import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';

const Home = () => {
  const { products, loading, error } = useContext(ProductContext);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fetching products: {error.message}</p>;

  return (
    <div>
      <SearchBar />
      <Filters />
      <div className="product-list">
        {products.map(product => (
          <ProductCard key={product.code} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
