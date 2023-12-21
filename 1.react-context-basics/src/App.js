
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import SearchAnExactItem from "./components/search/SearchAnExactItem/SearchAnExactItem";
import SearchRelatableItemAndCaseInsensitive from "./components/search/SearchRelatableItemAndCaseInsensitive/SearchRelatableItemAndCaseInsensitive";
import BottomToTop from "./components/BottomToTop/BottomToTop";
import "./App.css";

function App() {
  return (
    
      <Routes path='/' element={<Navigation/>}>
        <Route index element={<Home/>}></Route>
        <Route path="/searchanexactitem" element={<SearchAnExactItem/>}></Route>
        <Route path="/searchrelateableitem" element={<SearchRelatableItemAndCaseInsensitive />}></Route>
        <Route path="/bottomtotop" element={<BottomToTop/>}></Route>
      </Routes>
   
  );
}

export default App;
