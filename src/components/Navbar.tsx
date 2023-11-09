import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <div className='nav-grid'>
        <img className='logo' src='https://itsmetommy.com/wp-content/uploads/github-actions-docker-1.png' alt='logo' />
        <nav className='navbar'>
          <ul className='nav-list'>
            <li>
              <NavLink to='/' className={({ isActive }) => (isActive ? 'active-link' : 'link')}>
                Features
              </NavLink>
            </li>
            <li>
              <NavLink to='/' className={({ isActive }) => (isActive ? 'active-link' : 'link')}>
                Demo
              </NavLink>
            </li>
            <li>
              <NavLink to='/' className={({ isActive }) => (isActive ? 'active-link' : 'link')}>
                Team
              </NavLink>
            </li>
            <li>
              <NavLink to='/' className={({ isActive }) => (isActive ? 'active-link' : 'link')}>
                GitHub
              </NavLink>
            </li>
            <li>
              <NavLink to='/' className={({ isActive }) => (isActive ? 'active-link' : 'link')}>
                LinkedIn
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
