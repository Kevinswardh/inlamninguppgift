import TopLogo from "../../3-Assets/Pictures/top-logo.svg";
import { Link, NavLink } from "react-router-dom";
import DarkModeSwitch from "../../4-Components/DarkModeSwitch";
import HamburgerMenu from "../../4-Components/Hamburger-menu";
import HiddenMenu from "../../4-Components/HiddenMenu";
import { useState } from "react";
const TopHeader = () => {
  /*State sätts till false, togglas av HamburgerMenu komponenten,  */

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => {
      return !prev;
    });
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <header id="top-header">
      <div className="wrapper">
        <div aria-label="Menu to the Left" href="#" id="left-side-header">
          <div
            style={{ padding: "4px", display: "flex", flexDirection: "row" }}
          >
            {/*Logo*/}
            <Link to="/">
              <img src={TopLogo} alt="Top Logo" />
            </Link>
            <nav>
              <NavLink to="/" aria-current="page" id="logo-name" tabIndex="0">
                Silicon
              </NavLink>
              <NavLink to="/features" id="features" tabIndex="0">
                Features
              </NavLink>
              <NavLink to="/contact" id="features" tabIndex="0">
                Contact
              </NavLink>
            </nav>
          </div>
        </div>
        <div id="right-side-header" aria-label="Menu to the Right">
          <p className="dark-mode-text">Dark Mode</p>

          {/* Dark mode button */}
          <DarkModeSwitch />
          {/* Dark mode button */}

          <HamburgerMenu onClick={toggleMenu} isOpen={isMenuOpen} />
          <button className="signin-btn-link" tabIndex="0">
            <div className="signin-btn">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5.25 5.25C5.25 3.18225 6.93225 1.5 9 1.5C11.0677 1.5 12.75 3.18225 12.75 5.25C12.75 7.31775 11.0677 9 9 9C6.93225 9 5.25 7.31775 5.25 5.25ZM9 7.5C7.75736 7.5 6.75 6.49264 6.75 5.25C6.75 4.00736 7.75736 3 9 3C10.2426 3 11.25 4.00736 11.25 5.25C11.25 6.49264 10.2426 7.5 9 7.5Z"
                  fill="white"
                />
                <path
                  d="M15.75 15V15.75H14.25V15C14.25 12.9323 12.5677 11.25 10.5 11.25H7.5C5.43225 11.25 3.75 12.9323 3.75 15V15.75H2.25V15C2.25 12.1057 4.605 9.75 7.5 9.75H10.5C13.3943 9.75 15.75 12.1057 15.75 15Z"
                  fill="white"
                />
              </svg>
              <p>Sign in / up</p>
            </div>
          </button>
        </div>
      </div>
      {/* Hidden Menu (Mobile Only) */}
      {isMenuOpen && <HiddenMenu closeMenu={closeMenu} />}
    </header>
  );
};

export default TopHeader;
