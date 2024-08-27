import { useState } from "react";
import Button from "../../assets/Button";
import "./Calculator.css";

const Calculator = () => {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput(input + value);
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString());  
    } catch (e) {
      setInput("Error");
    }
  };

  return (
    <div className="calculator-container">
      <h1>Calculator</h1>
      <input type="text" value={input} readOnly className="calculator-display" />
      <div className="button-grid">
        {["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"].map((num) => (
          <Button
            key={num}
            text={num}
            className=" pt-3 calculator-button"
            onClick={() => handleClick(num)}
          />
        ))}
        <Button
          text="C"
          className="bg-danger pt-3 calculator-button"
          onClick={() => setInput("")}
        />
        <Button
          text="="
          className="bg-success pt-3 calculator-button"
          onClick={calculate}
        />
        {["+", "-", "*", "/"].map((operator) => (
          <Button
            key={operator}
            text={operator}
            className="bg-warning pt-3 calculator-button"
            onClick={() => handleClick(operator)}
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
