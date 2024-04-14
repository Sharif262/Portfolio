import React from 'react';

export const Experience = () => {
  return (
    <div id="experience" style={{
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
      }}>Experience</h2>
      
      {/* Example Experience Item */}
      <div style={{
        marginBottom: '20px',
      }}>
        <h3 style={{
          fontSize: '1.8rem',
          color: '#007bff'
        }}>Tutor - Basking School Of Engineering</h3>
        <p style={{
          fontSize: '1rem',
          color: '#666',
          marginBottom: '5px'
        }}>January 2024 - Present</p>
        <ul style={{
          listStyleType: 'none',
          paddingLeft: '0'
        }}>
          <li style={{
            marginBottom: '10px',
            fontSize: '1rem',
            color: '#555'
          }}>
            Tutored for courses such as Linear Algebra, Foundations of Game Design and Computer Systems and Assembly
          </li>
          <li style={{
            marginBottom: '10px',
            fontSize: '1rem',
            color: '#555'
          }}>
            Prepared lesson plans and study guides to prepare students for their exams. This lead to an increase by 15% in students exams and assignments
          </li>
          <li style={{
            fontSize: '1rem',
            color: '#555'
          }}>
            Improved my ability to read and debug code through assisting fellow peers assignments.
          </li>
        </ul>
      </div>

      {/* Repeat the above block for each experience item, replacing content as needed. */}

    </div>
  );
};
