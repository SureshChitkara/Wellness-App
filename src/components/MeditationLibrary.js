import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { MoodContext } from '../context/MoodContext';  // Import MoodContext
import meditationTrack1Image from '../assets/images/meditationP1.jpg';
import meditationTrack2Image from '../assets/images/meditationP2.jpg';
import meditationTrack3Image from '../assets/images/meditationP3.jpg';
import meditationTrack4Image from '../assets/images/meditationP4.jpg';
import meditationTrack5Image from '../assets/images/meditationP5.jpg';
import meditationTrack6Image from '../assets/images/meditationP6.jpg';
import meditationMusic1 from '../assets/music/meditationM1.mp3';
import meditationMusic2 from '../assets/music/meditationM2.mp3';
import meditationMusic3 from '../assets/music/meditationM3.mp3';
import meditationMusic4 from '../assets/music/meditationM4.mp3';
import meditationMusic5 from '../assets/music/meditationM5.mp3';
import meditationMusic6 from '../assets/music/meditationM6.mp3';

const MeditationLibrary = () => {
    const { updateMood, setCurrentTrack } = useContext(MoodContext);
    const navigate = useNavigate(); // Initialize navigate

    // State to track recently listened tracks
    const [recentlyListened, setRecentlyListened] = useState([]);

    const tracks = [
        { id: 1, name: 'Calm Mind', image: meditationTrack1Image, music: meditationMusic1, moodValue: 5 },
        { id: 2, name: 'Peaceful Waves', image: meditationTrack2Image, music: meditationMusic2, moodValue: 7 },
        { id: 3, name: 'Serene Forest', image: meditationTrack3Image, music: meditationMusic3, moodValue: 8 },
        { id: 4, name: 'Ethereal', image: meditationTrack4Image, music: meditationMusic4, moodValue: 2 },
        { id: 5, name: 'Peace of Mind', image: meditationTrack5Image, music: meditationMusic5, moodValue: 6 },
        { id: 6, name: 'Sereneity', image: meditationTrack6Image, music: meditationMusic6, moodValue: 8 },
    ];

    // Sort tracks alphabetically by name
    const sortedTracks = tracks.sort((a, b) => a.name.localeCompare(b.name));

    // Handle selecting a track
    const handleTrackSelect = (track) => {
        setCurrentTrack(track);  // Set current track
        updateMood(track.moodValue);  // Update mood based on track

        // Update recently listened list (avoid duplicates)
        setRecentlyListened((prev) => {
            const updatedList = prev.filter((t) => t.id !== track.id);
            return [track, ...updatedList.slice(0, 4)];  // Keep only the latest 5 tracks
        });
    };

    // Handle back button click
    const handleBack = () => {
        navigate('/journey'); // Navigate back to the JourneyPage
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Meditation Library</h1>
            <p>Select music to start your meditation journey.</p>

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

            {/* Recently Listened Section */}
            {recentlyListened.length > 0 && (
                <>
                    <h2 style={{ marginTop: '20px' }}>Recently Listened to</h2>
                    <div
                        style={{
                            display: 'flex',
                            overflowX: 'auto', // Enable horizontal scrolling
                            gap: '40px', // Space between tracks
                            padding: '10px 0', // Add padding for top and bottom
                        }}
                    >
                        {recentlyListened.map((track) => (
                            <div
                                key={track.id}
                                style={{
                                    textAlign: 'center',
                                    flex: '0 0 auto', // Prevent shrinking and enable horizontal layout
                                    width: '300px', // Set a consistent width for track containers
                                }}
                            >
                                <img
                                    src={track.image}
                                    alt={track.name}
                                    style={{ width: '150px', height: '150px', marginBottom: '10px' }} // Image styling
                                />
                                <h3>{track.name}</h3>
                                <audio controls src={track.music} style={{ width: '100%' }} />
                            </div>
                        ))}
                    </div>
                    {/* Divider between sections */}
                    <hr style={{ margin: '30px 0', border: 'none', borderTop: '2px solid #ccc' }} />
                </>
            )}

            {/* From A-Z Section */}
            <h2 style={{ marginTop: '20px' }}>From A-Z</h2>

            {/* Meditation Tracks in a Horizontal Scrollable Container */}
            <div
                style={{
                    display: 'flex',
                    overflowX: 'auto', // Enable horizontal scrolling
                    gap: '40px', // Space between tracks
                    padding: '10px 0', // Add padding for top and bottom
                }}
            >
                {sortedTracks.map((track) => (
                    <div
                        key={track.id}
                        style={{
                            textAlign: 'center',
                            flex: '0 0 auto', // Prevent shrinking and enable horizontal layout
                            width: '300px', // Set a consistent width for track containers
                        }}
                    >
                        <img
                            src={track.image}
                            alt={track.name}
                            style={{ width: '150px', height: '150px', marginBottom: '10px' }} // Image styling
                        />
                        <h3>{track.name}</h3>
                        <audio controls src={track.music} style={{ width: '100%' }} />
                        <button
                            onClick={() => handleTrackSelect(track)}
                            style={{
                                padding: '10px 20px',
                                fontSize: '16px',
                                marginTop: '10px',
                                backgroundColor: '#9c28c2',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                            }}
                        >
                            Select
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MeditationLibrary;
