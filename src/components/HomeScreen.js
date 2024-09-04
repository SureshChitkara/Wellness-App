// src/components/HomeScreen.js
import React from 'react';
import { Link } from 'react-router-dom';
import meditationImage from '../assets/images/meditation.jpg';
import gif1 from '../assets/images/gif1.gif';
import gif2 from '../assets/images/gif2.gif';

function HomeScreen() {
    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Welcome to the Wellness App</h1>
            <p>This is your go-to place for stress reduction, anxiety management, and better sleep.</p>

            {/* Container for the main image and GIFs */}
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
                {/* Left GIF */}
                <div style={{ flex: 1, textAlign: 'center' }}>
                    <img src={gif1} alt="Relaxing GIF" style={{ width: '80%', borderRadius: '10px' }} />
                </div>

                {/* Main Image */}
                <div style={{ flex: 2, textAlign: 'center' }}>
                    <img src={meditationImage} alt="Meditation" style={{ width: '70%', borderRadius: '10px' }} />
                </div>

                {/* Right GIF */}
                <div style={{ flex: 1, textAlign: 'center' }}>
                    <img src={gif2} alt="Meditation GIF" style={{ width: '80%', borderRadius: '10px' }} />
                </div>
            </div>

            {/* Sticky Container */}
            <div style={{
                position: 'sticky',
                top: '20px',
                backgroundColor: '#c000ff',
                padding: '20px',
                borderRadius: '10px',
                marginBottom: '20px'
            }}>
                <h2>Product Benefits:</h2>
                <ul style={{
                    listStyleType: 'none',
                    padding: 0,
                }}>
                    <li>Improved Mental Well-being: Access a diverse library of meditation sessions tailored to help reduce stress, manage anxiety, and improve sleep.</li>
                    <li>User-Friendly Interface: The app's intuitive design and easy navigation make it accessible for users of all ages and technical abilities.</li>
                    <li>Consistent Practice Encouragement: Timely notifications and reminders help users maintain a regular meditation routine.</li>
                    <li>Progress Tracking: Users can monitor their meditation streaks and progress over time.</li>
                    <li>On-Demand Access: Engage in meditation sessions at your convenience, fitting into any schedule.</li>
                </ul>

                <h2>Product Features:</h2>
                <ul style={{
                    listStyleType: 'none',
                    padding: 0,
                }}>
                    <li>Extensive Meditation Library: A comprehensive collection of guided meditation sessions targeting specific mental health needs.</li>
                    <li>Customizable Reminders: Notifications that users can personalize to remind them to meditate at suitable times.</li>
                    <li>Mood Tracking and Visualization: Log your moods and visualize emotional trends over time.</li>
                    <li>Virtual Therapy Sessions: Access virtual therapy appointments with certified therapists.</li>
                    <li>User Profile and Personalization: Manage personal information, preferences, and view meditation history.</li>
                </ul>

                <Link to="/journey">
                    <button style={{ padding: '10px 20px', fontSize: '16px', marginTop: '10px' }}>Start Your Journey</button>
                </Link>
            </div>
        </div>
    );
}

export default HomeScreen;
