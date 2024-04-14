import React from 'react';
import profilePic from './images/portfoliopfp.jpg'; // Import the image

function HomePage() {
  return (
    <>
      <section className="profile-section" id="home" style={{ 
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          padding: '20px',
          textAlign: 'center',
          backgroundColor: '#ffffff',
          boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
          margin: 'auto',
          maxWidth: '800px'
        }}>
        {/* Profile Picture */}
        <img src={profilePic} alt="Aaron Sharif" style={{
          borderRadius: '50%', // Keeps the image round
          width: '300px', // Increases the image size
          height: '300px', // Matches the width for a perfect circle
          objectFit: 'cover', // Ensures the image covers the area without stretching
          marginBottom: '5px', // Reduces the gap between the image and the name
        }} />

        {/* Name */}
        <h1 className="name" style={{ 
            fontFamily: 'Montserrat, sans-serif', 
            fontSize: '4em',
            fontWeight: '700',
            color: '#333',
            marginBottom: '0.2em'
          }}>Aaron Sharif</h1>

        {/* Small Description */}
        <p className="small-description" style={{
            fontSize: '1.2em',
            fontWeight: '400',
            color: '#555',
            maxWidth: '600px',
            lineHeight: '1.6',
            margin: '0 auto'
          }}>
          Passionate Computer Scientist with an interest in operating systems, devops and AI/ML
        </p>
      </section>
    </>
  );
}

export default HomePage;
