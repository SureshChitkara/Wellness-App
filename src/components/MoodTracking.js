import React, { useContext, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { MoodContext } from '../context/MoodContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const MoodTracking = () => {
    const { moodData, timeData, currentTrack, currentTime, setCurrentTime } = useContext(MoodContext);
    const navigate = useNavigate(); // Initialize useNavigate for navigation

    // Simulate time passing for mood changes over time
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime((prevTime) => prevTime + 1);
        }, 5000); // Update time every 5 seconds
        return () => clearInterval(interval); // Clean up interval
    }, [setCurrentTime]);

    // Data for the chart
    const data = {
        labels: timeData, // Time (x-axis)
        datasets: [
            {
                label: 'Mood Over Time',
                data: moodData, // Mood values (y-axis)
                borderColor: '#9c28c2',
                backgroundColor: 'rgba(156, 40, 194, 0.2)',
                fill: true,
                tension: 0.4,
            },
        ],
    };

    // Handle back button click
    const handleBack = () => {
        navigate('/journey'); // Navigate back to the JourneyPage or any other route
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Mood Tracking</h1>
            <p>Track how your mood changes based on the music you listen to.</p>

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

            <div style={{ width: '80%', margin: '0 auto', paddingBottom: '20px' }}>
                <Line data={data} />
            </div>

            {currentTrack && (
                <div style={{ marginTop: '20px' }}>
                    <h3>Currently Playing: {currentTrack.name}</h3>
                    <p>Mood: {currentTrack.moodValue}</p>
                </div>
            )}
        </div>
    );
};

export default MoodTracking;
