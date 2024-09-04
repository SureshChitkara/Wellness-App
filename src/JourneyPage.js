// src/JourneyPage.js
import React from 'react';
import './JourneyPage.css'; // Import the CSS file if using an external stylesheet

function JourneyPage() {
    return (
        <div className="journey-container">
            <section className="journey-section">
                <h2>Meditation Library</h2>
                <p>Details about the first section go here.</p>
                <button className="right-button">Button 1</button>
            </section>

            <section className="journey-section">
                <h2>Virtual Therapy</h2>
                <p>Details about the second section go here.</p>
                <button className="right-button">Button 2</button>
            </section>

            <section className="journey-section">
                <h2>Mood Tracking</h2>
                <p>Details about the third section go here.</p>
                <button className="right-button">Button 3</button>
            </section>
        </div>
    );
}

export default JourneyPage;
