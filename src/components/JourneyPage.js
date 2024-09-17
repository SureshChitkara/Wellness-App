import React from 'react';
import { Link } from 'react-router-dom'; // Import the Link component from react-router-dom
import '../JourneyPage.css'; // Import the CSS file if using an external stylesheet

function JourneyPage() {
    return (
        <div className="journey-container">
            <section className="journey-section">
                <h2>Meditation Library</h2>
                <p>Contains a collection of audio for meditation.</p>
                {/* Link to Meditation Library */}
                <Link to="/meditation-library">
                    <button className="right-button">Select</button>
                </Link>
            </section>

            <section className="journey-section">
                <h2>Virtual Therapy</h2>
                <p>Find the right therapist for you.</p>
                {/* Link to Virtual Therapy */}
                <Link to="/virtual-therapy">
                    <button className="right-button">Select</button>
                </Link>
            </section>

            <section className="journey-section">
                <h2>Mood Tracking</h2>
                <p>Track your mood</p>
                <Link to="/mood-tracking">
                    <button className="right-button">Select</button>
                </Link>
            </section>
        </div>
    );
}

export default JourneyPage;
