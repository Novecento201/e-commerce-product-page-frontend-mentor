import { useRef, useState } from 'react';
import MenuIcon from '../../images/icon-menu.svg';
import CloseIcon from '../../images/icon-close.svg';

import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const mobileNavRef = useRef();

  function toggleNavbarMobile(e) {
    if (e.target === mobileNavRef.current) {
      setIsOpen(true);
    } else {
      setIsOpen(!isOpen);
    }
  }

  return (
    <>
      {/* Mobile navbar */}
      <div className="container__mobile__nav">
        <button
          onClick={toggleNavbarMobile}
          className="mobile__nav__menu"
        >
          <img
            className="svg__icon"
            src={MenuIcon}
            alt="Menu icon for open navbar"
          />
        </button>
        <div
          className={`mobile__nav__container ${isOpen && 'active__navbar'}`}
          onClick={toggleNavbarMobile}
        >
          <nav
            className="mobile__nav"
            ref={mobileNavRef}
          >
            <button
              className="mobile__nav__close"
              onClick={toggleNavbarMobile}
            >
              <img
                src={CloseIcon}
                className="svg__icon"
                alt="Close icon for close navbar"
              />
            </button>
            <ul className="mobile__nav__content nav__content">
              <li>Collection</li>
              <li>Men</li>
              <li>Women</li>
              <li>About</li>
              <li>Contact</li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Desktop navbar */}
      <div className="container__desktop__nav">
        <ul className="desktop__nav__content  nav__content">
          <li>Collection</li>
          <li>Men</li>
          <li>Women</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
};
export default Navbar;
