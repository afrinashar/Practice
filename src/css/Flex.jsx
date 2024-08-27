import { useState } from "react";
import "./Flex.css";

const FlexboxLayout = () => {
  const [selectedOperation, setSelectedOperation] = useState("center");
  const [selectedWrap, setSelectedWrap] = useState("nowrap");
  const [selectedAlignItems, setSelectedAlignItems] = useState("center");
  const [selectedJustifyContent, setSelectedJustifyContent] = useState(
    "center"
  );

  const handleSelectChange = (event) => {
    setSelectedOperation(event.target.value);
  };

  const handleWrapChange = (event) => {
    setSelectedWrap(event.target.value);
  };

  const handleAlignItemsChange = (event) => {
    setSelectedAlignItems(event.target.value);
  };

  const handleJustifyContentChange = (event) => {
    setSelectedJustifyContent(event.target.value);
  };

  return (
    <div className="flexbox-demo">
      <h1>Flexbox Operations Demo</h1>
      <div className="dropdown-container">
        <label htmlFor="flex-operation">Main Flex Operations:</label>
        <select
          id="flex-operation"
          value={selectedOperation}
          onChange={handleSelectChange}
        >
          <option value="row">Row</option>
          <option value="row-reverse">Row Reverse</option>
          <option value="column">Column</option>
          <option value="column-reverse">Column Reverse</option>
          <option value="grow">Flex Grow</option>
          <option value="shrink">Flex Shrink</option>
          <option value="basis">Flex Basis</option>
          <option value="order">Order</option>
        </select>

        <label htmlFor="flex-wrap">Flex Wrap:</label>
        <select id="flex-wrap" value={selectedWrap} onChange={handleWrapChange}>
          <option value="nowrap">No Wrap</option>
          <option value="wrap">Wrap</option>
          <option value="wrap-reverse">Wrap Reverse</option>
        </select>

        <label htmlFor="align-items">Align Items:</label>
        <select
          id="align-items"
          value={selectedAlignItems}
          onChange={handleAlignItemsChange}
        >
          <option value="align-start">Start</option>
          <option value="align-center">Center</option>
          <option value="align-end">End</option>
          <option value="align-stretch">Stretch</option>
          <option value="align-baseline">Baseline</option>
        </select>

        <label htmlFor="justify-content">Justify Content:</label>
        <select
          id="justify-content"
          value={selectedJustifyContent}
          onChange={handleJustifyContentChange}
        >
          <option value="justify-start">Start</option>
          <option value="justify-center">Center</option>
          <option value="justify-end">End</option>
          <option value="justify-space-between">Space Between</option>
          <option value="justify-space-around">Space Around</option>
          <option value="justify-space-evenly">Space Evenly</option>
        </select>
      </div>

      <div
        className={`flex-container ${selectedOperation} ${selectedWrap} ${selectedAlignItems} ${selectedJustifyContent}`}
      >
        <div className="flex-item">1</div>
        <div className="flex-item">2</div>
        <div className="flex-item">3</div>
        <div className="flex-item">4</div>
        <div className="flex-item">5</div>
      </div>
    </div>
  );
};

export default FlexboxLayout;
