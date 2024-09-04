import React from 'react';

function NavBar() {
    return (
        <nav style={{ backgroundColor: '#333', padding: '10px' }}>
            <ul style={{ listStyleType: 'none', display: 'flex', justifyContent: 'space-around', color: '#fff' }}>
                <li><a href="/" style={{ color: '#fff', textDecoration: 'none' }}>Home</a></li>
                <li><a href="/about" style={{ color: '#fff', textDecoration: 'none' }}>About</a></li>
                <li><a href="/contact" style={{ color: '#fff', textDecoration: 'none' }}>Contact</a></li>
            </ul>
        </nav>
    );
}

export default NavBar;
