import React from 'react';
import '../styles/pages/landing.css';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import LogoBikeText from '../images/bike-tipo-vc.svg';

export default function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <img src={LogoBikeText} alt="logo bike tipo vc"/>
        <main>
          <h1 className="text-gray-700">Leve saúde para sua vida</h1>
          <p className="text-gray-700">
            Troque o carro por bicicleta e veja o mundo de uma outra forma.
          </p>
        </main>

        <div className="location">
          <strong>Springfield</strong>
          <span>Oregon</span>
        </div>

        <Link to="/map" className="enter-app">
          <FiArrowRight size={26} color="#fff" />
        </Link>
      </div>
    </div>
  );
}
