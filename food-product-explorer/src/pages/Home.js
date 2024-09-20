import React, { useEffect, useState } from 'react';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';
import BarcodeSearch from '../components/BarcodeSearch';
import Categories from '../components/Categories';
import Sort from '../components/Sort';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [barcode, setBarcode] = useState('');
  const [category, setCategory] = useState('');
  const [sort, setSort] = useState('');

  const fetchProducts = async () => {
    try {
      const response = await fetch('https://world.openfoodfacts.org/cgi/search.pl?search_simple=1&action=process&json=true');
      const data = await response.json();
      setProducts(data.products || []);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product => {
    const matchesName = product.product_name?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesBarcode = barcode ? product.code === barcode : true; 
    const matchesCategory = category ? product.category === category : true; 
    return matchesName && matchesBarcode && matchesCategory; 
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sort) {
      case 'name_asc':
        return a.product_name.localeCompare(b.product_name);
      case 'name_desc':
        return b.product_name.localeCompare(a.product_name);
      case 'nutrition_asc':
        return (a.nutrition_grade_fr || '').localeCompare(b.nutrition_grade_fr || '');
      case 'nutrition_desc':
        return (b.nutrition_grade_fr || '').localeCompare(a.nutrition_grade_fr || '');
      default:
        return 0;
    }
  });

  return (
    <div className="container">
      <h1 style={{ color: 'blue' }}>Food Products</h1>
      <div className="search-container">
        <SearchBar setSearchTerm={setSearchTerm} />
        <BarcodeSearch setBarcode={setBarcode} />
      </div>
      <div className="filters-container">
        <Categories setCategory={setCategory} />
        <Sort setSort={setSort} />
      </div>
      {loading ? <p>Loading...</p> : <ProductList products={sortedProducts} />}
    </div>
  );
};

export default Home;
