import React from 'react';
import "../styles/pages/landing.css";
import { FiArrowRight } from "react-icons/fi";

export default function Landing() {
  return (
    <div id="page-landing">
      <div className="content-wrapper">
        <main>
          <h1 className="text-gray-600">Leve felicidade para o mundo</h1>
          <p className="text-gray-600">Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>
        <a href="" className="enter-app">
          <FiArrowRight size={26} color="#fff"/>
        </a>
      </div>
    </div>
  );
}

