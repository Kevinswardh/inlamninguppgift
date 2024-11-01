import { NavLink } from "react-router-dom";
import { useRef, useEffect } from "react";

import PropTypes from "prop-types";
const HiddenMenu = ({ closeMenu }) => {
  const menuRef = useRef(null);
  const handleBlur = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.relatedTarget)) {
      closeMenu();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        !document.querySelector(".hamburger-menu").contains(event.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [closeMenu]);

  return (
    <nav className="hidden-menu" ref={menuRef} onBlur={handleBlur}>
      <h1
        style={{
          color: "gray",
          border: "1px solid gray",
          paddingLeft: "100%",
          paddingRight: "100%",
          paddingTop: "20px",
          paddingBottom: "20px  ",
        }}
      >
        Menu
      </h1>
      <NavLink to="/" aria-current="page" tabIndex="0" onClick={closeMenu}>
        Silicon
      </NavLink>
      <NavLink to="/features" tabIndex="0" onClick={closeMenu}>
        Features
      </NavLink>
      <NavLink to="/contact" tabIndex="0" onClick={closeMenu}>
        Contact
      </NavLink>
    </nav>
  );
};
HiddenMenu.propTypes = {
  closeMenu: PropTypes.func.isRequired,
};
export default HiddenMenu;
