
import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import Home from "./components/Home/Home";
import SearchAnItem from "./components/SearchAnItem/SearchAnItem";
import BottomToTop from "./components/BottomToTop/BottomToTop";
import "./App.css";

function App() {
  return (
    
      <Routes path='/' element={<Navigation/>}>
        <Route index element={<Home/>}></Route>
        <Route path="/searchanitem" element={<SearchAnItem/>}></Route>
        <Route path="/bottomtotop" element={<BottomToTop/>}></Route>
      </Routes>
   
  );
}

export default App;
