// src/components/MoodTracking.js
import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import { useNavigate } from 'react-router-dom';

Chart.register(...registerables); // Register Chart.js components

function MoodTracking() {
    const navigate = useNavigate();
    const [mood, setMood] = useState('');
    const [comments, setComments] = useState('');
    const [moodHistory, setMoodHistory] = useState([]);

    // Function to map moods to numeric values for the chart
    const moodToValue = (mood) => {
        switch (mood) {
            case 'Happy':
                return 5;
            case 'Calm':
                return 4;
            case 'Energetic':
                return 3;
            case 'Stressed':
                return 2;
            case 'Anxious':
                return 1;
            case 'Sad':
                return 0;
            default:
                return null;
        }
    };

    // Handle mood submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const newMoodEntry = {
            mood,
            comments,
            date: new Date().toLocaleDateString(), // Store current date
        };

        // Save to state (or could save to localStorage/database)
        setMoodHistory([...moodHistory, newMoodEntry]);

        // Optionally clear the form after submission
        setMood('');
        setComments('');
    };

    // Prepare data for the chart
    const chartData = {
        labels: moodHistory.map((entry) => entry.date),
        datasets: [
            {
                label: 'Mood Over Time',
                data: moodHistory.map((entry) => moodToValue(entry.mood)),
                borderColor: '#9c28c2',
                fill: false,
                tension: 0.1,
            },
        ],
    };

    const handleBack = () => {
        navigate('/journey'); // Navigate back to JourneyPage
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Mood Tracking</h1>
            <p>How are you feeling today? Select your mood and share your thoughts.</p>

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
                Back to Journey Page
            </button>

            {/* Mood Selection Form */}
            <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: '0 auto', textAlign: 'left' }}>
                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Select Your Mood:</label>
                    <select
                        value={mood}
                        onChange={(e) => setMood(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                        }}
                        required
                    >
                        <option value="">--Select Mood--</option>
                        <option value="Happy">Happy</option>
                        <option value="Calm">Calm</option>
                        <option value="Stressed">Stressed</option>
                        <option value="Anxious">Anxious</option>
                        <option value="Sad">Sad</option>
                        <option value="Energetic">Energetic</option>
                    </select>
                </div>

                <div style={{ marginBottom: '15px' }}>
                    <label style={{ display: 'block', marginBottom: '5px' }}>Additional Comments (Optional):</label>
                    <textarea
                        value={comments}
                        onChange={(e) => setComments(e.target.value)}
                        style={{
                            width: '100%',
                            padding: '10px',
                            borderRadius: '5px',
                            border: '1px solid #ccc',
                        }}
                        rows="5"
                        placeholder="Share anything on your mind..."
                    ></textarea>
                </div>

                <button
                    type="submit"
                    style={{
                        width: '100%',
                        padding: '10px',
                        backgroundColor: '#9c28c2',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        fontSize: '16px',
                    }}
                >
                    Submit Mood
                </button>
            </form>

            {/* Mood Tracking Chart */}
            <div style={{ marginTop: '40px' }}>
                <h2>Mood History</h2>
                {moodHistory.length > 0 ? (
                    <Line data={chartData} />
                ) : (
                    <p>No mood data available yet. Start tracking your mood!</p>
                )}
            </div>
        </div>
    );
}

export default MoodTracking;
