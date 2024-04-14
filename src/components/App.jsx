import React from 'react';
import NavBar from './NavBar';
import { AboutPage } from './AboutPage';
import { Experience } from './Experience';
import { Projects } from './Projects';
import { Contact } from './Contact';

function App() {
  return (
    <div className="main-container" style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      backgroundColor: '#e0ffff', // The background color of the whole page
    }}>
      <div className="content-container" style={{
        marginTop: '60px', // Adjust this value to fit your NavBar height
        maxWidth: '800px',
        width: '100%', // Ensures the container takes the full width
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        backgroundColor: 'white',
        position: 'relative', // For the absolute positioning of the NavBar
      }}>
        <NavBar />
        <section id="home">
          {/* HomePage content */}
        </section>
        <section id="about">
          <AboutPage />
        </section>
        <section id="experience">
          <Experience />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </div>
    </div>
  );
}

export default App;
