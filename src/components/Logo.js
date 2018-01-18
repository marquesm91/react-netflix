import React from 'react';
import { Link } from 'react-router-dom';

const logoUrl = require('../icons/logo.png');

const Logo = ({ changeMenuMarker }) => (
  <div className="navbar-logo-container">
    <Link to='/' onClick={() => changeMenuMarker('início')}>
      <img className="navbar-logo" src={logoUrl} alt='navbar-logo' />
    </Link>
  </div>
);

export { Logo };
