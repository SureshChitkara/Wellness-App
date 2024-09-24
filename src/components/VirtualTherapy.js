import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import therapistImage1 from '../assets/images/therapy1.jpg'; // Import image directly
import therapistImage2 from '../assets/images/therapy2.jpg'; // Import image directly

// Sample therapist data with profile pictures
const therapists = [
    {
        id: 1,
        name: 'Dr. Emily Smith',
        specialty: 'Cognitive Behavioral Therapy',
        bio: 'Dr. Smith has over 15 years of experience in CBT, specializing in anxiety and depression.',
        image: therapistImage1 // Correct path to the image
    },
    {
        id: 2,
        name: 'Dr. John Doe',
        specialty: 'Family Therapy',
        bio: 'Dr. Doe focuses on family dynamics and relationship counseling with a holistic approach.',
        image: therapistImage2 // Correct path to the image
    },
    // Add more therapists as needed
];

function VirtualTherapy() {
    const navigate = useNavigate();
    const [selectedTherapist, setSelectedTherapist] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [appointmentScheduled, setAppointmentScheduled] = useState(false);
    const [appointmentDetails, setAppointmentDetails] = useState({ date: '', time: '' });

    // Handle back button click
    const handleBack = () => {
        navigate('/journey'); // Navigate back to JourneyPage
    };

    // Open the appointment form modal
    const handleSchedule = (therapist) => {
        setSelectedTherapist(therapist);
        setShowModal(true); // Show the modal for scheduling
    };

    // Close the modal
    const handleCloseModal = () => {
        setShowModal(false); // Close the modal
    };

    // Handle form submission for scheduling an appointment
    const handleSubmit = (e) => {
        e.preventDefault();
        setShowModal(false);
        setAppointmentScheduled(true); // Show the confirmation message
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
                            backgroundColor: '#8c53a2',
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
                            onClick={() => handleSchedule(therapist)} // Open schedule form
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
                            Schedule Appointment
                        </button>
                    </div>
                ))}
            </div>

            {/* Schedule Appointment Modal */}
            {showModal && (
                <div
                    style={{
                        position: 'fixed',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: 'black',
                        backgroundColor: 'white',
                        padding: '20px',
                        borderRadius: '10px',
                        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                        zIndex: 1000,
                    }}
                >
                    {/* "X" Button to close the modal */}
                    <button
                        onClick={handleCloseModal}
                        style={{
                            position: 'absolute',
                            top: '10px',
                            right: '10px',
                            backgroundColor: 'transparent',
                            border: 'none',
                            fontSize: '18px',
                            cursor: 'pointer',
                            color: '#9c28c2',
                        }}
                    >
                        &times;
                    </button>
                    <h2>Schedule Appointment with {selectedTherapist.name}</h2>
                    <form onSubmit={handleSubmit}>
                        <div style={{ marginBottom: '10px', color: 'black' }}>
                            <label>
                                Select Date:
                                <input
                                    type="date"
                                    value={appointmentDetails.date}
                                    onChange={(e) =>
                                        setAppointmentDetails({ ...appointmentDetails, date: e.target.value })
                                    }
                                    required
                                    style={{ marginLeft: '10px' }}
                                />
                            </label>
                        </div>
                        <div style={{ marginBottom: '10px' }}>
                            <label>
                                Select Time:
                                <input
                                    type="time"
                                    value={appointmentDetails.time}
                                    onChange={(e) =>
                                        setAppointmentDetails({ ...appointmentDetails, time: e.target.value })
                                    }
                                    required
                                    style={{ marginLeft: '10px' }}
                                />
                            </label>
                        </div>
                        <button
                            type="submit"
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
                            Confirm Appointment
                        </button>
                    </form>
                </div>
            )}

            {/* Appointment Confirmation */}
            {appointmentScheduled && (
                <div style={{ marginTop: '20px', color: 'green' }}>
                    <h3>Appointment Scheduled!</h3>
                    <p>
                        Your appointment with {selectedTherapist.name} is scheduled for{' '}
                        {appointmentDetails.date} at {appointmentDetails.time}.
                    </p>
                </div>
            )}
        </div>
    );
}

export default VirtualTherapy;
