import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Filters = ({ setCategoryFilter }) => {
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        const fetchCategories = async () => {
            const response = await axios.get('https://world.openfoodfacts.org/categories.json');
            setCategories(response.data.tags);
        };

        fetchCategories();
    }, []);

    const handleCategoryChange = (event) => {
        const value = event.target.value;
        setSelectedCategory(value);
        setCategoryFilter(value);
    };

    return (
        <div>
            <h3>Filter by Category</h3>
            <select value={selectedCategory} onChange={handleCategoryChange}>
                <option value="">All Categories</option>
                {categories.map((category) => (
                    <option key={category.id} value={category.name}>
                        {category.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Filters;
