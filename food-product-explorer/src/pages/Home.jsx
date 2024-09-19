import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../components/ProductCard';
import SearchBar from '../components/SearchBar';
import Filters from '../components/Filters';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await axios.get('https://world.openfoodfacts.org/products.json');
            setProducts(response.data.products);
        };

        fetchProducts();
    }, []);

    const filteredProducts = products.filter(product => 
        product.product_name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <SearchBar setSearchQuery={setSearchQuery} />
            <Filters />
            <div className="product-list">
                {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
};

export default Home;
