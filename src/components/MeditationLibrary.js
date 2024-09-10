import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import meditationImage from '../assets/images/meditationLibrary.jpg'; // Main meditation library image
import meditationTrack1Image from '../assets/images/meditationP1.jpg'; // Image for track 1
import meditationTrack2Image from '../assets/images/meditationP2.jpg'; // Image for track 2
import meditationTrack3Image from '../assets/images/meditationP3.jpg'; // Image for track 3

import meditationMusic1 from '../assets/music/meditationM1.mp3';
import meditationMusic2 from '../assets/music/meditationM2.mp3';
import meditationMusic3 from '../assets/music/meditationM3.mp3'; // Add more tracks as needed

function MeditationLibrary() {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleBack = () => {
        navigate('/journey'); // Navigate back to JourneyPage
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Meditation Library</h1>
            <p>Relax with our collection of meditation tracks</p>

            {/* Back Button */}
            <button
                onClick={handleBack}
                style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    marginBottom: '20px',
                    backgroundColor: '#9c28c2',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                }}
            >
                Back
            </button>

            {/* Display Main Meditation Library Image */}
            <div style={{ marginBottom: '20px' }}>
                <img src={meditationImage} alt="Meditation Library" style={{ width: '80%', borderRadius: '10px' }} />
            </div>

            {/* Recently Released Section */}
            <h2>Recently Released</h2>
            <div style={{ display: 'flex', overflowX: 'scroll', gap: '20px', paddingBottom: '20px' }}>
                {/* Audio Track 1 */}
                <div style={{ minWidth: '300px', backgroundColor: '#9c28c2', padding: '10px', borderRadius: '10px', textAlign: 'center' }}>
                    <h3>Calm Mind</h3>
                    <img src={meditationTrack1Image} alt="Calm Mind" style={{ width: '100%', borderRadius: '10px', marginBottom: '10px' }} />
                    <audio controls style={{ width: '100%' }}>
                        <source src={meditationMusic1} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                </div>

                {/* Audio Track 2 */}
                <div style={{ minWidth: '300px', backgroundColor: '#9c28c2', padding: '10px', borderRadius: '10px', textAlign: 'center' }}>
                    <h3>Peaceful Waves</h3>
                    <img src={meditationTrack2Image} alt="Peaceful Waves" style={{ width: '100%', borderRadius: '10px', marginBottom: '10px' }} />
                    <audio controls style={{ width: '100%' }}>
                        <source src={meditationMusic2} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                </div>

                {/* Audio Track 3 */}
                <div style={{ minWidth: '300px', backgroundColor: '#9c28c2', padding: '10px', borderRadius: '10px', textAlign: 'center' }}>
                    <h3>Serene Forest</h3>
                    <img src={meditationTrack3Image} alt="Serene Forest" style={{ width: '100%', borderRadius: '10px', marginBottom: '10px' }} />
                    <audio controls style={{ width: '100%' }}>
                        <source src={meditationMusic3} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                </div>
            </div>

            {/* Main Meditation Tracks */}
            <h2>Main Tracks</h2>
            <div style={{ display: 'flex', overflowX: 'scroll', gap: '20px', paddingBottom: '20px' }}>
                {/* Add Main Meditation Tracks here as needed */}
                {/* Example track 4 */}
                <div style={{ minWidth: '300px', backgroundColor: '#9c28c2', padding: '10px', borderRadius: '10px', textAlign: 'center' }}>
                    <h3>Calm Mind</h3>
                    <img src={meditationTrack1Image} alt="Calm Mind" style={{ width: '100%', borderRadius: '10px', marginBottom: '10px' }} />
                    <audio controls style={{ width: '100%' }}>
                        <source src={meditationMusic1} type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                </div>

                {/* Add more tracks similarly */}
            </div>
        </div>
    );
}

export default MeditationLibrary;
