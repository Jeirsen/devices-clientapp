import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <nav>
      <ul className="options">
        <li>
          <Link className="option" to="/">
            Dashboard
          </Link>
        </li>
        <li>
          <Link className="option" to="/add-device/add">
            Add New Device
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
