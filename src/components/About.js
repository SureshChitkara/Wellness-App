import React from 'react';
import '../About.css';

function About() {
    return (
        <div className="about-container">
            <h1>About Wellness App</h1>
            <section>
                <h2>Our Mission</h2>
                <p>The Wellness App is designed to empower individuals on their journey to mental well-being. Whether you're looking to reduce stress, manage anxiety, or improve sleep quality, our app offers a variety of tools and resources to support you in achieving a balanced and mindful lifestyle.</p>
            </section>

            <section>
                <h2>Why Choose Wellness App?</h2>
                <ul>
                    <ul><strong>Expert-Designed Meditation Sessions:</strong> Each session in our library is crafted by mental health and mindfulness experts, tailored to your needs.</ul>
                    <ul><strong>On-Demand Access:</strong> Access our meditation library anytime, anywhere, to fit your schedule.</ul>
                    <ul><strong>Personalized Experience:</strong> Track your progress, set personal goals, and customize your journey.</ul>
                </ul>
            </section>

            <section>
                <h2>Key Features</h2>
                <ul>
                    <ul>Extensive Meditation Library for stress, anxiety, and sleep management</ul>
                    <ul>Mood Tracking to monitor and visualize emotional health</ul>
                    <ul>Progress Tracking to keep track of meditation streaks</ul>
                    <ul>Custom Reminders for consistent practice</ul>
                    <ul>Virtual Therapy Sessions with certified therapists</ul>
                </ul>
            </section>

            <section>
                <h2>Our Vision</h2>
                <p>At Wellness App, we believe mental well-being should be accessible to everyone. Our vision is to create a platform that brings mindfulness into people's everyday lives, fostering a community of wellness and balance.</p>
            </section>

        </div>
    );
}

export default About;
