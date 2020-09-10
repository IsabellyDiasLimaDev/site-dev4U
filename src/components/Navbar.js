import React from 'react';
import $ from 'jquery';
import { Link } from 'react-router-dom';

import './components.css';

import logo from '../assets/logo.png';

// import { Container } from './styles';

function Navbar() {
    $(document).ready(function(){
        $('.navTrigger').click(function () {
            $(this).toggleClass('active');
            console.log("Clicked menu");
            $("#mainListDiv").toggleClass("show_list");
            $("#mainListDiv").fadeIn();
        
        });
        });
    return (
        <>
            <nav className="nav">
                <div className="nav-content">
                    <div className="div-logo">
                        <Link to="/"><img src={logo} alt="logo" className="logo"/></Link>
                    </div>
                    <div id="mainListDiv" className="main_list">
                        <ul className="navlinks">
                            <li><Link to="/" className="nav-link nav-link-ltr">Home</Link></li>
                            <li><Link to="/about" className="nav-link nav-link-ltr">Sobre</Link></li>
                            <li><Link to="/contact" className="nav-link nav-link-ltr">Contato</Link></li>
                        </ul>
                    </div>
                    <span className="navTrigger">
                        <i></i>
                        <i></i>
                        <i></i>
                    </span>
                </div>
            </nav>
        </>

    );
}

export default Navbar;