import React from 'react';
import "./Header.scss"

const Header = () => {
  return (
    <header>
      <nav>
        <img src={process.env.PUBLIC_URL + "/images/Header/logo.svg"} alt="Flylo logo" />
        <ul>
          <li>Features</li>
          <li>Team</li>
          <li>Sign in</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;