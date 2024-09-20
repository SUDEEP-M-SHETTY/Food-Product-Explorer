import React, { useState } from 'react';

const SearchBar = ({ setSearchTerm }) => {
  const [input, setInput] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(input.trim());
    setInput('');
  };

  return (
    <form onSubmit={handleSearch} className="search-bar">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for food products"
        className="border rounded p-2"
      />
      <button type="submit" className="ml-2 bg-blue-500 text-white rounded p-2">Search</button>
    </form>
  );
};

export default SearchBar;
