import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

function NavBar() {
    return (
        <nav style={{ backgroundColor: '#333', padding: '10px' }}>
            <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-around', color: '#fff' }}>
                <li><Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link></li>
                <li><Link to="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</Link></li>
                <li><Link to="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</Link></li>
            </ul>
        </nav>
    );
}

export default NavBar;
