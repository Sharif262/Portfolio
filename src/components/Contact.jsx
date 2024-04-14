import React from 'react';

export const Contact = () => {
  return (
    <div id="contact" style={{
      maxWidth: '800px',
      margin: 'auto',
      padding: '50px 20px',
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      borderRadius: '8px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <h2 style={{
        fontSize: '2.5rem',
        color: '#333',
        marginBottom: '1rem'
      }}>Contact</h2>
      
      <p style={{
        fontSize: '1rem',
        textAlign: 'center',
        marginBottom: '2rem'
      }}>I'm always open to discussing new opportunities, projects, or collaborations. Reach out to me!</p>
      
      <form style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '400px'
      }}>
        <input 
          type="text"
          placeholder="Your Name"
          style={inputStyle}
        />
        <input 
          type="email"
          placeholder="Your Email"
          style={inputStyle}
        />
        <textarea 
          placeholder="Your Message"
          rows="4"
          style={inputStyle}
        ></textarea>
        <button type="submit" style={{
          padding: '10px',
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '10px'
        }}>
          Send Message
        </button>
      </form>
    </div>
  );
};

const inputStyle = {
  padding: '10px',
  marginBottom: '10px',
  borderRadius: '4px',
  border: '1px solid #ddd',
  fontSize: '1rem'
};
