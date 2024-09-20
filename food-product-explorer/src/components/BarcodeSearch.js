import React, { useState } from 'react';

const BarcodeSearch = ({ setBarcode }) => {
  const [barcodeInput, setBarcodeInput] = useState('');

  const handleBarcodeSearch = (e) => {
    e.preventDefault();
    setBarcode(barcodeInput.trim());
    setBarcodeInput('');
  };

  return (
    <form onSubmit={handleBarcodeSearch} className="barcode-search">
      <input
        type="text"
        value={barcodeInput}
        onChange={(e) => setBarcodeInput(e.target.value)}
        placeholder="Search by Barcode"
        className="border rounded p-2"
      />
      <button type="submit" className="ml-2 bg-blue-500 text-white rounded p-2">Search</button>
    </form>
  );
};

export default BarcodeSearch;
