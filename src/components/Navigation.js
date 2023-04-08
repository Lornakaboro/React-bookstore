import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const links = [
  { path: '/', text: 'HOME' },
  { path: 'categories', text: 'CATEGORIES' },
];

export default function Navbar() {
  return (
    <header>
      <nav>
        <div className="nav-details">
          <h2>Bookstore CMS</h2>
          <ul className="nav-items">
            {links.map((link) => (
              <li key={link.text}>
                <NavLink to={link.path}>{link.text}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="nav-right">
          <div>
            <a href="/public/index.html" aria-label="user">
              <FontAwesomeIcon icon={faUser} className="Mask" style={{ color: '#0290ff' }} />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}
