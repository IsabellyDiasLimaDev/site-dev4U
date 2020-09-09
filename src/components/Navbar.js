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
            <nav class="nav">
                <div class="container">
                    <div class="logo">
                        <a href="#">Your Logo</a>
                    </div>
                    <div id="mainListDiv" class="main_list">
                        <ul class="navlinks">
                            <li><a href="#">About</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <span class="navTrigger">
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