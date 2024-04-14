import React from 'react';

export const Interests = () => {
  return (
    <div id="projects" style={{
      maxWidth: '800px',
      margin: 'auto',
      padding: '50px 20px',
      backgroundColor: '#ffffff',
      boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
      borderRadius: '8px'
    }}>
      <h2 style={{
        textAlign: 'center',
        fontSize: '2.5rem',
        color: '#333',
        marginBottom: '30px'
      }}>Projects</h2>
      
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
        gap: '20px'
      }}>
        {/* Project One */}
        <div style={{
          border: '1px solid #e1e1e1',
          borderRadius: '10px',
          padding: '20px',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#007bff' }}>Huffman Compression</h3>
          <p>Application design to shrink the file size and restore it back to its original when prompted.</p>
        </div>

        {/* Project Two */}
        <div style={{
          border: '1px solid #e1e1e1',
          borderRadius: '10px',
          padding: '20px',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#007bff' }}>XXD</h3>
          <p>Replicated the debugging command XXD in UNIX</p>
        </div>

        {/* Project Three */}
        <div style={{
          border: '1px solid #e1e1e1',
          borderRadius: '10px',
          padding: '20px',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#007bff' }}>This website</h3>
          <p>This essentially counts as a project</p>
        </div>

        {/* Add more project cards as needed */}
      </div>
    </div>
  );
};
