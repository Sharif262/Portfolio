import React from 'react';
import Navbar from './components/NavBar';
import HomePage from './components/Homepage';
import { AboutPage } from './components/AboutPage';
import { Experience } from './components/Experience';
import { Interests } from './components/Projects';
import { Contact } from './components/Contact';
import './portfoliostyle.css'; // Ensure this path is correct

function App() {
  return (
    <div className="main-container" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#e0ffff', // The background color of the whole page
    }}>
      <div className="content-container" style={{
        marginTop: '60px', // Adjust this value to fit your Navbar height
        maxWidth: '800px',
        width: '100%', // Ensures the container takes the full width
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        backgroundColor: 'white',
        position: 'relative', // For the absolute positioning of the Navbar
      }}>
        <Navbar />
        <HomePage />
        <AboutPage />
        <Experience />
        <Interests />
        <Contact />
      </div>
    </div>
  );
}

export default App;
