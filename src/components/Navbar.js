import React from 'react';

const Navbar = () => {
  return (
    <nav className="nav-wrap red" data-testid="navbar">
      <div className="container">
        <a href="/#" className="brand-logo">
          Top Movies
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
