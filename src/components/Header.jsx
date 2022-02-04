import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Header.css';

const Header = () => {
  return (
    <div className="Header">
      <Link to="/">
        <h1 className="Header-title">Platzi Conf Merch</h1>
      </Link>
      <Link to="/checkout">
        <div className="Header-checkout">Checkout</div>
      </Link>
    </div>
  );
};

export default Header;
