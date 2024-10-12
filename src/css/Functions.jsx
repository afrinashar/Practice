<<<<<<< HEAD
import   { useState } from "react";
import "./Functions.css";

const Functions = () => {
  const [cssFunction, setCssFunction] = useState("calc");

  const handleFunctionChange = (event) => {
    setCssFunction(event.target.value);
  };

  return (
    <div className="css-functions">
      <h1>CSS Functions</h1>
      <div className="dropdown-container">
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
      </div>

      <div className={`box-container ${cssFunction}`}>
        <div className="content-box">Content Box</div>
      </div>
    </div>
  );
};

export default Functions;
=======
import   { useState } from "react";
import "./Functions.css";

const Functions = () => {
  const [cssFunction, setCssFunction] = useState("calc");

  const handleFunctionChange = (event) => {
    setCssFunction(event.target.value);
  };

  return (
    <div className="css-functions">
      <h1>CSS Functions</h1>
      <div className="dropdown-container">
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
      </div>

      <div className={`box-container ${cssFunction}`}>
        <div className="content-box">Content Box</div>
      </div>
    </div>
  );
};

export default Functions;
>>>>>>> 40d3f5c578858cb4d8da71bbb6a2db7ab3b0c574
