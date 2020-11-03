import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import logoBike from '../images/logo-64px.svg';

import '../styles/components/sidebar.css';

export default function Sidebar() {
  const { goBack } = useHistory();
  return (
    <aside className="app-sidebar">
      <img src={logoBike} alt="bike tipo vc" />

      <footer>
        <button type="button" onClick={goBack}>
          <FiArrowLeft size={24} color="#fff" />
        </button>
      </footer>
    </aside>
  );
}
