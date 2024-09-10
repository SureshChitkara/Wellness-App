import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import therapistImage1 from '../assets/images/therapy1.jpg'; // Import image directly
import therapistImage2 from '../assets/images/therapy2.jpg'; // Import image directly

// Sample therapist data
const therapists = [
    {
        id: 1,
        name: 'Dr. T',
        specialty: 'Cognitive Behavioral Therapy',
        bio: 'Dr. T has over 15 years of experience in therapy, specializing in anxiety and depression.',
        image: therapistImage1 // Use imported image
    },
    {
        id: 2,
        name: 'Dr. John Doe',
        specialty: 'Family Therapy',
        bio: 'Dr. Doe focuses on family dynamics and relationship counseling with a holistic approach.',
        image: therapistImage2 // Use imported image
    },
    // Add more therapists as needed
];

function VirtualTherapy() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate('/journey'); // Navigate back to JourneyPage
    };

    return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Virtual Therapy</h1>
            <p>Select a therapist to view their profile and schedule an appointment.</p>

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

            {/* Therapist List */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {therapists.map((therapist) => (
                    <div
                        key={therapist.id}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            marginBottom: '20px',
                            border: '1px solid #ddd',
                            borderRadius: '10px',
                            padding: '10px',
                            width: '80%',
                            backgroundColor: '#b613e3',
                        }}
                    >
                        <img
                            src={therapist.image}
                            alt={therapist.name}
                            style={{ width: '150px', height: '150px', borderRadius: '50%', marginBottom: '10px' }}
                        />
                        <h3>{therapist.name}</h3>
                        <p><strong>Specialty:</strong> {therapist.specialty}</p>
                        <p>{therapist.bio}</p>
                        <button
                            style={{
                                padding: '10px 20px',
                                fontSize: '16px',
                                backgroundColor: '#9c28c2',
                                color: 'white',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                            }}
                        >
                            View Profile
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default VirtualTherapy;
