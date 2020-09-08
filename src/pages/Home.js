import React from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './pages.css';

import cashier from '../assets/cashier.png';
import research from '../assets/research.png';
import telemarketer from '../assets/telemarketer.png';

function Home() {
    return (
        <>
            <Navbar />
            <div>
                <div className="header">
                    <p>Desenvolvendo para você <br /> soluções tecnológicas e <br />inovadoras</p>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <h2 className="title">Nossos Serviços</h2>
                </div>
                <div className="row">
                    <div className="card">
                        <img src={research} alt="sistema erp" className="icons" />
                        <p className="title-card">Sistema ERP</p>
                    </div>
                    <div className="card">
                        <img src={cashier} alt="sistema pdv" className="icons" />
                        <p className="title-card">Sistema PDV</p>
                    </div>
                    <div className="card">
                        <img src={telemarketer} alt="suporte tecnico" className="icons" />
                        <p className="title-card">Suporte Técnico</p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Home;