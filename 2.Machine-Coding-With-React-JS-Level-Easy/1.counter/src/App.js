import "./App.css";
import { useState } from "react";

function App() {
  const [currentValue, setCurrentValue] = useState(0);
  const [inputUnits, setInputUnits] = useState("");

  const handleInputValue = (event) => {
    const value = event.target.value;
    setInputUnits(value);

    // Use parseFloat to convert the input to a floating-point number
    const number = parseFloat(value);

    // Check if the number is NaN (Not a Number)
    if (isNaN(number)) {
      // Handle the error accordingly, you may clear the state or set an error flag
      console.log("Invalid input");
      return;
    }

    // Check if the number is positive, negative, or zero
    if (number > 0) {
      // Set state for positive number
      console.log("Positive number:", number);
    } else if (number < 0) {
      // Set state for negative number
      console.log("Negative number:", number);
    } else {
      // Set state for zero
      console.log("Zero:", number);
    }

    // Check if the number is a float or an integer
    if (Number.isInteger(number)) {
      // Set state for integer
      console.log("Integer:", number);
    } else {
      // Set state for float
      console.log("Float:", number);
    }
  };

  const handleIncrease = () => {
    // Convert inputUnits to a number or treat it as 0 if it's an empty string
    const unitsToAdd = inputUnits === "" ? 0 : parseFloat(inputUnits);

    if (inputUnits === "0") {
      // Alert user that they can't increase when currentValue is 0
      alert(
        "Cannot increase when entered value is 0.As any value increased with 0 seems the value it self"
      );
      return;
    }
    let value = currentValue + unitsToAdd;
    if (!isNaN(value)) {
      setCurrentValue(value);
    } else {
      alert("Invalid input for increase");
    }
  };

  const handleDecrease = () => {
    // Convert inputUnits to a number or treat it as 0 if it's an empty string
    const unitsToSubtract = inputUnits === "" ? 0 : parseFloat(inputUnits);
    if (inputUnits === "0") {
      // Alert user that they can't increase when currentValue is 0
      alert(
        "Cannot increase when entered value is 0. As any value decreased with 0 seems the value it self"
      );
      return;
    }
    let value = currentValue - unitsToSubtract;
    if (!isNaN(value)) {
      setCurrentValue(value);
    } else {
      alert("Invalid input for decrease");
    }
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
