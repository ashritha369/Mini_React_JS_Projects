import {  useState } from "react";
import jsondata from "../../../jsondata.json";

const SearchAnExactItem = () => {
  const [inputValue, setInputValue] = useState("");
  const [searchedItem, setSearchedItem] = useState("");
  const arrayOfTitles = [];
  // to get arrayOfTitles
  jsondata.forEach((item) => arrayOfTitles.push(item.title));
  //to get input values and setting it to varaible
  const onEnterValueHandler = (event) => {
    setInputValue(event.target.value);
  };

  // inputValue needs to be searched in arrayOfTitles
  const handleSearch = () => {
    if (arrayOfTitles.includes(inputValue)) {
      setSearchedItem(inputValue);
    } else {
      setSearchedItem("Search Item Not Found");
    }
  };

  return (
    <div className="searchAnItem-container">
{/* CASE 1: EXACT SEARCHED ITEM WITH SAME CASE ALPHABETS */}
     <div className="case1">
     <input
        className="input-bar"
        value={inputValue}
        onChange={onEnterValueHandler}
      />
      <button onClick={handleSearch}>Search</button>
      <div className="searchedItem">
        Searched Item is : <h3>{searchedItem}</h3>
      </div>
      <div className="list-of-items">
        {jsondata.map((item) => {
          return <div key={item.title}>{item.title}</div>;
        })}
      </div>
     </div>
   
      
    </div>
  );
};
export default SearchAnExactItem;
