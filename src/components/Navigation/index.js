import React from 'react';

function Navigation() {

  return (
    <ul className='headerUl'>
      <li className='headerNav'>
        <a href="#about-me">AboutMe</a>
        <a href="#work">Portfolio</a>
        <a href="#contact-me">Contact</a>
        <a href="#resume">Resume</a>
      </li>
    </ul>
  );
}

// ({ currentPage, handlePageChange }) {
//   return (
//     <ul className="nav nav-tabs" class="headerNav">
//       <li className="nav-item" class="headerUl">
//         <a
//           href="#about"
//           onClick={() => handlePageChange('About')}
//           className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}
//         >
//           About Me
//         </a>
//       </li>
//       <li className="nav-item" class="headerUl">
//         <a
//           href="#portfolio"
//           onClick={() => handlePageChange('Portfolio')}
//           className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}
//         >
//           Portfolio
//         </a>
//       </li>
//       <li className="nav-item" class="headerUl">
//         <a
//           href="#contact"
//           onClick={() => handlePageChange('Contact')}
//           className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
//         >
//           Contact
//         </a>
//       </li>
//       <li className="nav-item" class="headerUl">
//         <a
//           href="#resume"
//           onClick={() => handlePageChange('Resume')}
//           className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
//         >
//           Resume
//         </a>
//       </li>
//     </ul>
//   );
// }

export default Navigation;