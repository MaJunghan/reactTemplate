import React from 'react';
import logo from 'img/favicon.png';

const Navbar = () => {
  return (
    <nav id="navbar">
      <div className="navbar__logo">
        <img className="logo" src={logo} alt="lo" />
        <a href="#"> JungHan </a>
      </div>
      <ul className="navbar__menu">
        <li className="navbar__menu__item active" data-link="#home">Home</li>
        <li className="navbar__menu__item" data-link="#about">About</li>
        <li className="navbar__menu__item" data-link="#skills">Skills</li>
        <li className="navbar__menu__item" data-link="#work">My work</li>
        <li className="navbar__menu__item" data-link="#contact">Contact</li>
      </ul>

      <button className="navbar__toggle-btn">
        <i className="fas fa-bars"></i>
      </button>
    </nav>
  )
}
export default Navbar;