import React from 'react';
import { NavLink } from 'react-router-dom';

import './Navigation.scss';

export const Navigation: React.FC = () => (
  <nav className="nav">
    <NavLink
      to="/"
      className="nav__link"
    >
      Home
    </NavLink>
    <NavLink
      to="/people"
      className="nav__link"
    >
      People
    </NavLink>
  </nav>
);
