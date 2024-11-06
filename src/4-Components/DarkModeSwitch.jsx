import { useState, useEffect } from "react";

const DarkModeSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem("darkmode");
    if (savedDarkMode !== null) {
      return savedDarkMode === "on";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkmode", "on");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkmode", "off");
    }
  });
  const handleToggle = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };
  return (
    <label htmlFor="darkmode-checkbox" className="toggle-switch">
      <input
        id="darkmode-checkbox"
        type="checkbox"
        checked={isDarkMode}
        onChange={handleToggle}
        aria-label="Dark mode checkbox"
        tabIndex="0"
      />
      <div className="toggle-knob"></div>
    </label>
  );
};

export default DarkModeSwitch;
