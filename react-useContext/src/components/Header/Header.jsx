import React from 'react';
import { NavLink } from 'react-router-dom';

const toggleActiveClass = ({ isActive }) => (isActive ? 'active' : 'notActive');

const Header = () => {
  return (
    <nav style={{ display: 'flex', justifyContent: 'center', width: '100%', gap: '1rem' }}>
      <NavLink className={toggleActiveClass} to='/'>
        Home
      </NavLink>
      <NavLink className={toggleActiveClass} to='/movie'>
        Movies
      </NavLink>
      <NavLink className={toggleActiveClass} to='/dashboard'>
        Dashboard
      </NavLink>
    </nav>
  );
};

export default Header;
