// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import NavBar from './components/NavBar';
import JourneyPage from './JourneyPage'; // Import the new page component
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/journey" element={<JourneyPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
