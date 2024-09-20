import React from 'react';

const Sort = ({ setSort }) => {
  const handleSortChange = (e) => {
    setSort(e.target.value);
  };

  return (
    <div className="sort-container">
      <label htmlFor="sort">Sort by: </label>
      <select id="sort" onChange={handleSortChange} defaultValue="">
        <option value="" disabled>Select sorting option</option>
        <option value="name_asc">Product Name (A-Z)</option>
        <option value="name_desc">Product Name (Z-A)</option>
        <option value="nutrition_asc">Nutrition Grade (A to E)</option>
        <option value="nutrition_desc">Nutrition Grade (E to A)</option>
      </select>
    </div>
  );
};

export default Sort;
