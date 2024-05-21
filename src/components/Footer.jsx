import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <div className='top'>
        <div className="endereço">
          <h5>Endereço:</h5>
          <p>BR, São Paulo</p>
          <h5>Contato</h5>
          <p>11 97070-7070</p>
          <p>fiap@fiap.com.br</p>
        </div>
        <div className='integrantes'>
            <p>Caio Hideki</p>
            <p>Diana Leticia</p>
            <p>Erick Molina</p>
            <p>João Carvalho</p>
            <p>Jorge Booz</p>
        </div>
      </div>
      
      <div className="copy-right">
        <p>© Todos os direitos reservados a FIAP</p>
      </div>
      
      <div className="social-icons">
        <FaFacebook className="icon" />
        <FaInstagram className="icon" />
        <FaLinkedin className="icon" />
        <FaEnvelope className="icon" />
      </div>
    </footer>
  );
}

export default Footer;
