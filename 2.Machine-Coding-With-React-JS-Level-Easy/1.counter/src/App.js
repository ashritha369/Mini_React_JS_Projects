import "./App.css";
import { useState } from "react";

function App() {
  const [currentValue, setCurrentValue] = useState(0);
  const [inputUnits, setInputUnits] = useState("");

  const handleInputValue = (event) => {
    const value = event.target.value;
    setInputUnits(value);
  };

  const handleOperation = (operation) => {

    const unitsToAddOrSubtract = inputUnits === "" ? 0 : parseFloat(inputUnits);

    if (inputUnits === "0") {
      // Alert user that they can't increase when currentValue is 0
      alert(
        "Cannot increase/decrease when entered value is 0.As any value increased with 0 seems the value it self"
      );
      return;
    }

    // IF ELSE CONDITION
    let value;
    if (operation === "increase") {
      value = currentValue + unitsToAddOrSubtract;
    } else if (operation === "decrease") {
      value = currentValue - unitsToAddOrSubtract;
    }
    // /////////////////////
    if (!isNaN(value)) {
      setCurrentValue(value);
    } else {
      alert("Invalid input for decrease");
    }
  };

  const handleIncrease = () => {
    handleOperation("increase");
  };

  const handleDecrease = () => {
    handleOperation("decrease");
  };

  const handleReset = () => {
    setInputUnits("");
    setCurrentValue(0);
  };

  return (
    <div className="counter-container">
      <div className="first-row">
        <button className="increase-button" onClick={handleIncrease}>
          +
        </button>
        <div className="current-value">{currentValue}</div>
        <button className="decrease-button" onClick={handleDecrease}>
          -
        </button>
      </div>
      <div className="second-row">
        <input value={inputUnits} onChange={handleInputValue}></input>
        <span className="reader-text">
          Enter units: to increase /decrease by
        </span>
      </div>
      <div className="reset-button-div">
        <button className="reset-btn" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
