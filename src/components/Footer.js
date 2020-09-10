import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './components.css';

// import { Container } from './styles';

export default class Footer extends Component {

  constructor(props) {
    super(props);
    this.atualizarAno = { date: new Date() };
}

  render(){
  return(
      <>
      <div className="footer-dark">
        <ul>
          <li>©{this.atualizarAno.date.getFullYear()}</li>
            <li><Link className="footer-link footer-link-ltr" to="/about">Sobre nós</Link></li>
            <li><Link className="footer-link footer-link-ltr" to="/contact">Contato</Link></li>
            <li><Link className="footer-link footer-link-ltr" to="/privacypolicy">Política de Privacidade</Link></li>
        </ul>
      </div>
      </>
  );
  }
}