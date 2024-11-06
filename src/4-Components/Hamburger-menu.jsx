import PropTypes from "prop-types";

const HamburgerMenu = ({ onClick, isOpen }) => {
  return (
    <>
      <button
        aria-controls="Mobile menu"
        aria-expanded={isOpen}
        aria-label="Toggle mobile menu"
        className="hamburger-menu"
        tabIndex="0"
        onClick={onClick}
      >
        <span className={isOpen ? "top" : ""}></span>
        {isOpen ? null : <span></span>}
        <span className={isOpen ? "bottom" : ""}></span>
      </button>
    </>
  );
};

// Define prop types for HamburgerMenu
HamburgerMenu.propTypes = {
  onClick: PropTypes.func.isRequired, // onClick should be a function and is required
  isOpen: PropTypes.bool.isRequired, // isOpen should be a boolean and is required
};

export default HamburgerMenu;
