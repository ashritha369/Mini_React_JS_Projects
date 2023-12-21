import { useState } from "react";
import jsondata from "../../../jsondata.json";

const SearchRelatableItemAndCaseInsensitive = () => {
  const [inputValue, setInputValue] = useState("");
  let changingFilteredArray=[];

  function handleInputValue(event) {
    setInputValue(event.target.value);
  }
  console.log(inputValue);
 
  const names = [];


  for (let i = 0; i < jsondata.length; i++) {
    let items = jsondata[i].items;
    for (let j = 0; j < items.length; j++) {
      names.push(items[j].name);
    }

  }


  changingFilteredArray= names.filter((item) => {
    return (
     item.toLowerCase().includes(inputValue.toLowerCase()) ||
     item.toUpperCase().includes(inputValue.toUpperCase())
    );
  });

  console.log(changingFilteredArray)

  function handleCloseClick() {
    setInputValue("");
  }
  return (
    <div>
      <input value={inputValue} onChange={handleInputValue}></input>
      <button className="button-close" onClick={handleCloseClick}>
        X
      </button>

      { changingFilteredArray.map((item) => {
        return <div>{item}</div>;
      })}
    </div>
  );
};

export default SearchRelatableItemAndCaseInsensitive;




