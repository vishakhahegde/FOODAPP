import React from "react";
import { Link } from "react-router-dom";
import '../src/Navbar.css';

function Navvy(){
    return(
        <nav className="navbar">
            <h className="headernav">Take Recipe</h>
            <ul>
                <li><Link className="start" to="/Contact" style={{ textDecoration: 'none' }}>Contact</Link></li>
                <li><Link className="start" to="/Foods" style={{ textDecoration: 'none' }}>Foods</Link></li>
                <li><Link className="start" to="/Tech" style={{ textDecoration: 'none' }}>Tech Used</Link></li>
                <li><Link className="start" to="/About" style={{ textDecoration: 'none' }}>About</Link></li>
                <li><Link className="start" to="/" style={{ textDecoration: 'none' }}>Home</Link></li>
                <li><Link className="start" to="/Choose" style={{ textDecoration: 'none' }}>Login</Link></li>
            </ul>
        </nav>
    );
}

export default Navvy;