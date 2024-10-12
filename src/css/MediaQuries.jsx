import  { useState } from "react";
import "./MediaQueries.css";

const MediaQueries  = () => {
  const [screenSize, setScreenSize] = useState("desktop");

  const handleScreenSizeChange = (event) => {
    setScreenSize(event.target.value);
  };

  return (
    <div className="media-queries- ">
      <h1>Media Queries  </h1>
      <div className="dropdown-container">
        <label htmlFor="screen-size">Select Screen Size:</label>
        <select
          id="screen-size"
          value={screenSize}
          onChange={handleScreenSizeChange}
        >
          <option value="mobile">Mobile</option>
          <option value="tablet">Tablet</option>
          <option value="desktop">Desktop</option>
        </select>
      </div>

      <div className={`responsive-container ${screenSize}`}>
        <div className="content-box">Content Box 1</div>
        <div className="content-box">Content Box 2</div>
        <div className="content-box">Content Box 3</div>
        <div className="content-box">Content Box 4</div>
      </div>
    </div>
  );
};

export default MediaQueries ;
