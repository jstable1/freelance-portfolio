import React from 'react';

function Navigation() {

  return (
    <ul className='headerUl'>
      <li className='headerNav'>
        <a href="#about-me">AboutMe</a>
        <a href="#work">Portfolio</a>
        <a href="#resume">Resume</a>
        <a href="#contact-me">Contact</a>
      </li>
    </ul>
  );
}

export default Navigation;