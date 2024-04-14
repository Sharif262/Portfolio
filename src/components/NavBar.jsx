import React from 'react';
import { Link } from 'react-scroll';

const NavBar = () => {
    return (
      <nav style={{
        position: 'absolute', // Positioned relative to its parent
        top: 0, // Align to the top of the parent
        left: 0, // Align to the left of the parent
        right: 0, // Align to the right of the parent
        zIndex: 10,
        display: 'flex',
        justifyContent: 'space-around',
        padding: '10px 0',
        backgroundColor: 'white',
        width: '100%', // Take the full width of the parent
        borderBottom: '1px solid #ccc',
      }}>
      <ul style={{
        listStyleType: 'none', 
        display: 'flex', 
        justifyContent: 'space-around', 
        width: '100%', // Ensure the list covers the full width of the nav
        padding: 0, // Reset padding to 0
        margin: 0 // Reset margin to 0
      }}>
        <li><Link to="about" smooth={true} duration={1000}>About Me</Link></li>
        <li><Link to="experience" smooth={true} duration={1000}>Experience</Link></li>
        <li><Link to="projects" smooth={true} duration={1000}>Projects</Link></li>
        <li><Link to="contact" smooth={true} duration={1000}>Contacts</Link></li>
      </ul>
    </nav>
  );
};

export default NavBar;
