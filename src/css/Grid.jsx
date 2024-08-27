import  { useState } from "react";
import "./Grid.css";

const Grid = () => {
    const [gridStructure, setGridStructure] = useState("two-columns");
    const [alignItems, setAlignItems] = useState("center");
    const [justifyItems, setJustifyItems] = useState("center");
    const [gridGap, setGridGap] = useState("medium-gap");
    const [gridAutoFlow, setGridAutoFlow] = useState("row");
  
    const handleStructureChange = (event) => {
      setGridStructure(event.target.value);
    };
  
    const handleAlignItemsChange = (event) => {
      setAlignItems(event.target.value);
    };
  
    const handleJustifyItemsChange = (event) => {
      setJustifyItems(event.target.value);
    };
  
    const handleGridGapChange = (event) => {
      setGridGap(event.target.value);
    };
  
    const handleGridAutoFlowChange = (event) => {
      setGridAutoFlow(event.target.value);
    };
  
    return (
      <div className="grid-demo">
        <h1>CSS Grid Operations Demo</h1>
        <div className="dropdown-container">
          <label htmlFor="grid-structure">Grid Structure:</label>
          <select
            id="grid-structure"
            value={gridStructure}
            onChange={handleStructureChange}
          >
            <option value="two-columns">Two Columns</option>
            <option value="three-columns">Three Columns</option>
            <option value="four-columns">Four Columns</option>
          </select>
  
          <label htmlFor="align-items">Align Items:</label>
          <select
            id="align-items"
            value={alignItems}
            onChange={handleAlignItemsChange}
          >
            <option value="start">Start</option>
            <option value="center">Center</option>
            <option value="end">End</option>
            <option value="stretch">Stretch</option>
          </select>
  
          <label htmlFor="justify-items">Justify Items:</label>
          <select
            id="justify-items"
            value={justifyItems}
            onChange={handleJustifyItemsChange}
          >
            <option value="start">Start</option>
            <option value="center">Center</option>
            <option value="end">End</option>
            <option value="stretch">Stretch</option>
          </select>
  
          <label htmlFor="grid-gap">Grid Gap:</label>
          <select id="grid-gap" value={gridGap} onChange={handleGridGapChange}>
            <option value="no-gap">No Gap</option>
            <option value="small-gap">Small Gap</option>
            <option value="medium-gap">Medium Gap</option>
            <option value="large-gap">Large Gap</option>
          </select>
  
          <label htmlFor="grid-auto-flow">Grid Auto Flow:</label>
          <select
            id="grid-auto-flow"
            value={gridAutoFlow}
            onChange={handleGridAutoFlowChange}
          >
            <option value="row">Row</option>
            <option value="column">Column</option>
            <option value="dense">Dense</option>
          </select>
        </div>
  
        <div
          className={`grid-container ${gridStructure} ${alignItems} ${justifyItems} ${gridGap} ${gridAutoFlow}`}
        >
          <div className="grid-item">1</div>
          <div className="grid-item">2</div>
          <div className="grid-item">3</div>
          <div className="grid-item">4</div>
          <div className="grid-item">5</div>
          <div className="grid-item">6</div>
        </div>
      </div>
    );
  };
  

export default Grid;
