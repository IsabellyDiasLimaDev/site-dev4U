import React from 'react';
import { Link } from 'react-router-dom';

import './components.css';

import logo from '../assets/logo.png';

// import { Container } from './styles';

function Navbar() {
    return (
        <>
            <div className="navbar">
                <div>
                    <Link to="/"><img src={logo} alt="logo" className="logo" /></Link>
                </div>
                <div>
                    <div className="menu">
                        <Link className="nav-link nav-link-ltr" to="/">Home</Link>
                       <Link className="nav-link nav-link-ltr" to="/about">Sobre</Link>
                       <Link className="nav-link nav-link-ltr" to="/contact">Contato</Link> 
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;