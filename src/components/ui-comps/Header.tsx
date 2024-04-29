// import React from 'react';

// interface HeaderProps {
//   isSticky: boolean;
//   openMenu: () => void;
// }

// const Header: React.FC<HeaderProps> = ({ isSticky, openMenu }) => {
//   return (
//     <header id="myHeader" className={isSticky ? 'sticky' : ''}>
//       <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 714.6 401.1">
//         {/* SVG path */}
//       </svg>
//       <nav>
//         <a href="#vision">Vision</a>
//         <a href="#knowledge">Knowledge</a>
//         <a href="#space">Space</a>
//         <a href="#future">Future</a>
//         <button id="openmenu" onClick={openMenu}>
//           <span></span>
//           <span></span>
//         </button>
//       </nav>
//     </header>
//   );
// }

// export default Header;

import React from 'react';

interface HeaderProps {
  isSticky: boolean;
  openMenu: () => void;
}

const Header: React.FC<HeaderProps> = ({ isSticky, openMenu }) => {
  return (
    <header id="myHeader" className={isSticky ? 'sticky' : ''}>
      <svg id="logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 714.6 401.1">
        {/* SVG path */}
      </svg>
      <nav className="nav-links">
        <a href="#vision">Vision</a>
        <a href="#knowledge">Knowledge</a>
        <a href="#space">Space</a>
        <a href="#future">Future</a>
        <button id="openmenu" onClick={openMenu}>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
}

export default Header;
