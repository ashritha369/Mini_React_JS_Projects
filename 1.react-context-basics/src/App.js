
import { Routes, Route } from "react-router-dom";
import "./App.css";
//1.MAIN
import Navigation from "./components/1.Main/1a.Navigation/Navigation";
import Home from "./components/1.Main/1b.Home/Home";
//2 SEARCH 
import SearchAnExactItem from "./components/2.search/SearchAnExactItem/SearchAnExactItem";
import SearchRelatableItemAndCaseInsensitive from "./components/2.search/SearchRelatableItemAndCaseInsensitive/SearchRelatableItemAndCaseInsensitive";
//3 TOGGLE THEMES
import ToggleThemeBasic from "./components/4.ToggleThemes/1.ToggleThemeBasic/ToggleThemesComponentsBasic/ToggleThemeBasic.component";

function App() {
  return (
    
      <Routes path='/' element={<Navigation/>}>
        <Route index element={<Home/>}></Route>
        {/* 2 SEARCH */}
        <Route path="/searchanexactitem" element={<SearchAnExactItem/>}></Route>
        <Route path="/searchrelateableitem" element={<SearchRelatableItemAndCaseInsensitive />}></Route>
        {/* 3 TOGGLE THEMES */}
        <Route path="/togglethemebasic" element={<ToggleThemeBasic />}></Route>

      </Routes>
   
  );
}

export default App;
