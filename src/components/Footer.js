import React from 'react';
import {Link} from 'react-router-dom';

import './components.css';

// import { Container } from './styles';

function Footer() {
  return(
      <>
      <div className="footer-dark">
        <ul>
            <li><Link className="footer-link footer-link-ltr" to="/about">Sobre nós</Link></li>
            <li><Link className="footer-link footer-link-ltr" to="/contact">Contato</Link></li>
            <li><Link className="footer-link footer-link-ltr" to="/privacypolicy">Política de Privacidade</Link></li>
        </ul>
      </div>
      </>
  );
}

export default Footer;