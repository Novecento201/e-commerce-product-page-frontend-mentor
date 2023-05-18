import Logo from '../../images/logo.svg';
import Profile from '../../images/image-avatar.png';
import Navbar from '../Navbar/Navbar';
import Cart from '../Cart/Cart';

import './Header.css';

const Header = () => {
  return (
    <header className="header__container">
      <div className="container header__container__content">
        <div className="header__container__left">
          <h2 className="header__logo">
            <img
              src={Logo}
              alt="Logo of the website."
            />
          </h2>
          <Navbar />
        </div>

        <div className="header__container__right">
          <Cart />

          <button className="header__profile">
            <img
              src={Profile}
              alt="Profile image."
            />
          </button>
        </div>
      </div>
    </header>
  );
};
export default Header;
