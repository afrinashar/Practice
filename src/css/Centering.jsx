import  { useState } from "react";
import "./Centering.css";

const Centering  = () => {
  const [centeringMethod, setCenteringMethod] = useState("flex");

  const handleCenteringChange = (event) => {
    setCenteringMethod(event.target.value);
  };

  return (
    <div className="centering- ">
      <h1>CSS Centering Properties  </h1>
      <div className="controls">
        <label htmlFor="centering-method">Select Centering Method:</label>
        <select
          id="centering-method"
          value={centeringMethod}
          onChange={handleCenteringChange}
        >
          <option value="flex">Flexbox</option>
          <option value="grid">Grid</option>
          <option value="absolute">Absolute Positioning</option>
          <option value="margin">Margin Auto</option>
        </select>
      </div>

      <div className={` -container ${centeringMethod}`}>
        <div className="content-box">Centered Box</div>
      </div>
    </div>
  );
};

export default Centering ;
