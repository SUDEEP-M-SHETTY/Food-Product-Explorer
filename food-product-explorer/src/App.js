import React from 'react';
import Navbar from './components/Navbar';
import Routes from './routes';
import AppRoutes from './routes'; // Import the routes
import './App.css'; // Import your styles

const App = () => {
    return (
        <div>
            <Navbar />
            <h1>Food Product Explorer</h1>
            <AppRoutes /> {/* Use AppRoutes here */}
        </div>
    );
};

export default App;

