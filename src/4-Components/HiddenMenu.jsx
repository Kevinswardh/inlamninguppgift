import { NavLink } from "react-router-dom";
import { useRef, useEffect } from "react";

import PropTypes from "prop-types";
const HiddenMenu = ({ closeMenu }) => {
  const menuRef = useRef(null); /*State variabel*/
  const handleBlur = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.relatedTarget)) {
      closeMenu();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      /* Samlar in elementet i useRef och fokuserar på att fånga mousedown.
       Validerar först genom att kontrollera om menuRef.current finns, med hjälp av short-circuiting.
       Fortsätter sedan genom att kolla om <nav>-elementet (hämtat via useRef) inte innehåller eventets target,
       som hämtas direkt från DOM:en genom JavaScripts eventobjekt. Vi kollar även om .hamburger-menu 
       innehåller eventet.

       Om klicket sker utanför både <nav> och .hamburger-menu, och om <nav> finns i useRef,
       stängs menyn med closeMenu-funktionen.
    */
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
      {" "}
      {/*här sätter vi state variablen till nav elementet*/}
      <h1
        style={{
          color: "gray",
          border: "1px solid gray",
          paddingLeft: "40%",
          paddingRight: "40%",
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
