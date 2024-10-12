import { useState } from "react";
import "./DarkMode.css";

const DarkMode  = () => {
  const [cssFunction, setCssFunction] = useState("calc");
  const [darkMode, setDarkMode] = useState(false);

  const handleFunctionChange = (event) => {
    setCssFunction(event.target.value);
  };

  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`css-functions-  ${darkMode ? "dark-mode" : "light-mode"}`}>
      <h1>CSS Functions  </h1>
      <div className="controls">
        <label htmlFor="css-function">Select CSS Function:</label>
        <select
          id="css-function"
          value={cssFunction}
          onChange={handleFunctionChange}
        >
          <option value="calc">calc()</option>
          <option value="var">var()</option>
          <option value="clamp">clamp()</option>
          <option value="min">min()</option>
          <option value="max">max()</option>
        </select>

        <label htmlFor="dark-mode-toggle">
          <input
            type="checkbox"
            id="dark-mode-toggle"
            checked={darkMode}
            onChange={handleDarkModeToggle}
          />
          Dark Mode
        </label>
      </div>

      <div className={` -container ${cssFunction}`}>
        <div className="content-box">Content Box</div>
      </div>
    </div>
  );
};

export default DarkMode ;
