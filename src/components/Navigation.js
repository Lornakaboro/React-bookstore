import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { path: '/', text: 'HOME' },
  { path: 'categories', text: 'CATEGORIES' },
];

export default function Navbar() {
  return (
    <header>
      <nav>
        <ul className="nav-items">
          {links.map((link) => (
            <li key={link.text}>
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
