import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeScreen from './components/HomeScreen';
import About from './components/About';  // Example About component
import Contact from './components/Contact';  // Example Contact component
import NavBar from './components/NavBar';
import JourneyPage from './components/JourneyPage';
import MeditationLibrary from './components/MeditationLibrary';
import VirtualTherapy from './components/VirtualTherapy'
import MoodTracking from './components/MoodTracking';
import { MoodProvider } from './context/MoodContext'; // Import the MoodProvider

function App() {
    return (
        <MoodProvider>
            <Router>
                <div className="App">
                    <NavBar />
                    <Routes>
                        <Route path="/" element={<HomeScreen />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/journey" element={<JourneyPage />} />
                        <Route path="/meditation-library" element={<MeditationLibrary />} />
                        <Route path="/virtual-therapy" element={<VirtualTherapy />} />
                        <Route path="/mood-tracking" element={<MoodTracking />} />
                    </Routes>
                </div>
            </Router>
        </MoodProvider>
    );
}

export default App;
