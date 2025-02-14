import React from 'react';

const Header = () => {
  return (
    <header className="menu">
      <h1 className="text_title" id="texto_menu">Las aguas del chavo</h1>
      <div className="elements">
        <i className="bi bi-cart icon-size"></i>
        <i className="bi bi-list icon-size"></i>
      </div>
    </header>
  );
};

export default Header;
