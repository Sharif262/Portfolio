import React from 'react';

export const AboutPage = () => {
  return (
    <div id="about" style={{ padding: '4rem', backgroundColor: '#fff', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)' }}>
      <div style={{ textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>About Me</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem' }}>Dedicated and innovative Computer Science graduate from UC Santa Cruz. 
          With a strong foundation in software engineering principles and a passion for solving complex problems,
          I'm ready to bring cutting-edge solutions to your tech team.</p>
      </div>
      
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '2rem' }}>
        <div style={{ flex: '1', padding: '1rem' }}>
          {/* Placeholder for an image or icon */}
          <h3 style={{ marginBottom: '0.5rem' }}>Education</h3>
          <p>University of California Santa Cruz - June 2025</p>
        </div>
        
        <div style={{ flex: '1', padding: '1rem' }}>
          {/* Placeholder for an image or icon */}
          <h3 style={{ marginBottom: '0.5rem' }}>Major</h3>
          <p>Computer Science BS</p>
        </div>


        
        <div style={{ flex: '1', padding: '1rem' }}>
          {/* Placeholder for an image or icon */}
          <h3 style={{ marginBottom: '0.5rem' }}>Hobbies & Interests</h3>
          <p>I love hiking, photography, watching movies, gaming, coding, reading, etc</p>
        </div>
      </div>


      <div style={{ textAlign: 'center', padding: '1rem' }}>
        <button style={{ padding: '0.5rem 1rem', backgroundColor: '#007bff', color: '#fff', borderRadius: '4px', border: 'none', cursor: 'pointer' }}>
          Download Resume
        </button>
      </div>



    </div>
  );
};
