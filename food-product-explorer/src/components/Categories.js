import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Categories = ({ setCategory }) => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get('https://world.openfoodfacts.org/categories.json');
        setCategories(response.data.tags);
      } catch (error) {
        console.error('Error fetching categories:', error);
        setError('Failed to load categories. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  if (loading) return <p>Loading categories...</p>;
  if (error) return <p className="error-message text-red-500">{error}</p>;

  return (
    <div className="categories-container">
      <label htmlFor="categories">Categories: </label>
    <select id="categories" onChange={(e) => setCategory(e.target.value)} defaultValue="">
      <option value="" disabled>Select a category</option>
      {categories.map((category, index) => (
        <option key={index} value={category.name}>{category.name}</option>
      ))}
    </select>
    </div>
  );
};

export default Categories;
