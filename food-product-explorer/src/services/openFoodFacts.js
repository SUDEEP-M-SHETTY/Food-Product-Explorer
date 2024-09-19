import axios from 'axios';

const BASE_URL = 'https://world.openfoodfacts.org';

export const fetchProducts = async () => {
  const response = await axios.get(`${BASE_URL}/category/food.json`);
  return response.data.products;
};

export const getProductByBarcode = async (barcode) => {
  const response = await axios.get(`${BASE_URL}/api/v0/product/${barcode}.json`);
  return response.data.product;
};
