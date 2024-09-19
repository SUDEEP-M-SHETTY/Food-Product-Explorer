import React from 'react';
import AppRoutes from './routes'; // Import the routes
import './App.css'; // Import your styles

const App = () => {
  return (
    <div>
      <h1>Food Product Explorer</h1>
      <AppRoutes /> {/* Use the routes here */}
    </div>
  );
};

export default App;
