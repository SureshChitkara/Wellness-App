import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import NavBar from './components/NavBar';
import JourneyPage from './components/JourneyPage';  // Import the JourneyPage component
import About from './components/About';  // Example About component
import Contact from './components/Contact';  // Example Contact component
import MeditationLibrary from './components/MeditationLibrary'; // Import the MeditationLibrary component
import VirtualTherapy from './components/VirtualTherapy'; // Import the VirtualTherapy component
import MoodTracking from './components/MoodTracking'; // Import the VirtualTherapy component

import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <NavBar />
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/journey" element={<JourneyPage />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/meditation-library" element={<MeditationLibrary />} />
                    <Route path="/virtual-therapy" element={<VirtualTherapy />} /> {/* Add this line */}
                    <Route path="/mood-tracking" element={<MoodTracking />} /> {/* Add this route */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
