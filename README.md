# Food Product Explorer

## Overview

The Food Product Explorer is a web application designed to help users search, filter, and view detailed information about food products using the OpenFoodFacts API. The project employs ReactJS for the front end and implements various functionalities to enhance user experience while interacting with food product data.

## Problem-Solving Approach

### 1. **Requirements Analysis**
   - Identified core functionalities: product listing, searching, filtering, sorting, and detailed views.
   - Ensured the application would be responsive and user-friendly across devices.

### 2. **API Integration**
   - Familiarized myself with the OpenFoodFacts API documentation to understand available endpoints.
   - Selected key endpoints:
     - **Product Search by Name**: Allows users to search products.
     - **Category Products**: Fetches products based on selected categories.
     - **Product Details by Barcode**: Retrieves detailed information for specific products.

### 3. **Front-End Development**
   - **Project Setup**: Initialized the project using Create React App for a quick setup.
   - **Component Structure**:
     - **Homepage**: Created a main component to display the product list, including search and filter functionalities.
     - **Search Bar**: Implemented controlled components for searching by name and barcode.
     - **Category Filter**: Developed a dropdown to filter products based on categories fetched from the API.
     - **Sorting Functionality**: Added sorting options that modify the product list display.
     - **Product Detail Page**: Created a separate route for product details, showcasing all relevant information.

### 4. **State Management**
   - Used React hooks (e.g., `useState`, `useEffect`) for managing component states and side effects.
   - Implemented local state for handling product data, search queries, filters, and pagination.

### 5. **Pagination Implementation**
   - Chose infinite scroll to manage large datasets effectively.
   - Used the API's pagination capabilities to fetch additional product data as needed.

### 6. **Styling and Responsiveness**
   - Utilized CSS for styling components, ensuring a cohesive and visually appealing layout.
   - Implemented responsive design techniques (flexbox, media queries) to ensure compatibility on various devices.

### 7. **Testing and Debugging**
   - Conducted thorough testing for all functionalities, ensuring proper API integration and UI responsiveness.
   - Addressed any issues or bugs discovered during testing to enhance user experience.

## Technologies Used

- **Front-end**: ReactJS
- **Styling**: CSS
- **API Integration**: OpenFoodFacts API

## Installation

To set up the project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/food-product-explorer.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd food-product-explorer
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Run the application**:
   ```bash
   npm start
   ```

5. **Open your browser** and navigate to `http://localhost:3000`.

## API Usage

The application makes use of the OpenFoodFacts API to retrieve product data. Below are some key endpoints used in the application:

- **Get products by category**:
  ```
  GET https://world.openfoodfacts.org/category/{category}.json
  ```

- **Search products by name**:
  ```
  GET https://world.openfoodfacts.org/cgi/search.pl?search_terms={name}&json=true
  ```

- **Get product details by barcode**:
  ```
  GET https://world.openfoodfacts.org/api/v0/product/{barcode}.json
  ```

## Contributing

Contributions are welcome! If you have suggestions for improvements or want to add features, feel free to fork the repository and submit a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgments

- [OpenFoodFacts](https://world.openfoodfacts.org/) for providing the API and extensive food database.

---

For any questions or issues, please open an issue in the repository or contact me directly. Happy exploring!
