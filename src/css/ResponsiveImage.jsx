import  { useState } from "react";
import "./ResponsiveImage.css";

const ResponsiveImage  = () => {
  const [responsiveMethod, setResponsiveMethod] = useState("percentage");

  const handleMethodChange = (event) => {
    setResponsiveMethod(event.target.value);
  };

  return (
    <div className="responsive-image- ">
      <h1>Responsive Image  </h1>

      <div className="controls">
        <label htmlFor="responsive-method">Select Responsive Method:</label>
        <select
          id="responsive-method"
          value={responsiveMethod}
          onChange={handleMethodChange}
        >
          <option value="percentage">Percentage Width</option>
          <option value="max-width">Max Width</option>
          <option value="object-fit">Object Fit</option>
          <option value="srcset">Srcset and Sizes</option>
        </select>
      </div>

      <div className={` -container ${responsiveMethod}`}>
        <img
          src="https://via.placeholder.com/800"
          alt="Responsive"
          className="responsive-image"
        />
      </div>
    </div>
  );
};

export default ResponsiveImage ;
