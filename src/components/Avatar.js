import React from 'react';
import { Link } from 'react-router-dom';

const avatarUrl = require('../icons/empty_avatar.jpg');

const Avatar = () => (
  <div className="dropdown">
    <img src={avatarUrl} alt='navbar-avatar' />
    <div className="dropdown-content">
      <ul style={{ listStyle: 'none' }}>
        <Link to='/profile'>
          <li>Conta</li>
        </Link>
        <li>Sair</li>
      </ul>
    </div>
    <i className="fa fa-caret-down" aria-hidden="true"></i>
  </div>
);

export { Avatar };
