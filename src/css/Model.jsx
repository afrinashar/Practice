import  { useState } from "react";
import "./Model.css";

const Css  = () => {
  const [styleType, setStyleType] = useState("links");
  const [alignment, setAlignment] = useState("center");

  const handleStyleChange = (event) => {
    setStyleType(event.target.value);
  };

  const handleAlignmentChange = (event) => {
    setAlignment(event.target.value);
  };

  return (
    <div className="css- ">
      <h1>CSS Properties  </h1>

      <div className="controls">
        <label htmlFor="style-type">Select Style Type:</label>
        <select id="style-type" value={styleType} onChange={handleStyleChange}>
          <option value="links">Links</option>
          <option value="buttons">Buttons</option>
          <option value="modals">Modals</option>
        </select>

        <label htmlFor="alignment">Select Alignment:</label>
        <select id="alignment" value={alignment} onChange={handleAlignmentChange}>
          <option value="center">Center</option>
          <option value="start">Start</option>
          <option value="end">End</option>
        </select>
      </div>

      <div className={` -container ${styleType} ${alignment}`}>
        {styleType === "links" && (
          <a href="#" className=" -link">  Link</a>
        )}
        {styleType === "buttons" && (
          <button className=" -button">  Button</button>
        )}
        {styleType === "modals" && (
          <div className="modal-overlay">
            <div className="modal-content">
              <h2>Modal Title</h2>
              <p>This is a modal example.</p>
              <button className="modal-close">Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Css ;
