
import './App.css';
import {useState} from 'react'

function App() {
const [currentValue,setCurrentValue]=useState(0);
const [inputUnits,setInputUnits]=useState(1);

const handleInputValue=(event)=>{
  // handled string: i.e converted from string to number
 
setInputUnits(Number(event.target.value));
// handle float numbers
//handle negative numbers
}


<input value={inputUnits} onChange={handleInputValue} />


const handleIncrease=()=>{
let value=currentValue+inputUnits;
  setCurrentValue(value);

}

const handleDecrease=()=>{
  let value=currentValue-inputUnits;
  setCurrentValue(value);


}
const handleReset=()=>{
setInputUnits(0);
setCurrentValue(0);
}

  return (
    <div className="counter-container">
      <div className='first-row'>
           <button className='increase-button' onClick={handleIncrease}>+</button>
           <div className='current-value'>{currentValue}</div>
           <button className='decrease-button' onClick={handleDecrease}>-</button>
      </div>
      <div className='second-row'>
          <input value={inputUnits} onChange={handleInputValue}></input>
          <span className='reader-text'>Enter units: to increase /decrease by</span>
      </div>
      <div className='reset-button-div'>
         <button className='reset-btn' onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default App;
