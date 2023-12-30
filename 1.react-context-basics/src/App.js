
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
import ToggleThemeAdvanced from "./components/4.ToggleThemes/2.ToggleThemeAdvanced/ToggleThemesComponentsAdvanced/ToggleThemeAdvanced.component";
//4 PAYMENT COMPONENT
import ProceedToPayment from "./components/5.PaymentWithRazorpay/ProceedToPaymentWithRazorpay";
// 5 TIC-TAC TOE
import TicTacToe from "./components/6.Tic-tac-toe/tic-tac-toe.component";

function App() {
  return (
    
      <Routes path='/' element={<Navigation/>}>
        <Route index element={<Home/>}></Route>
        {/* 2 SEARCH */}
        <Route path="/searchanexactitem" element={<SearchAnExactItem/>}></Route>
        <Route path="/searchrelateableitem" element={<SearchRelatableItemAndCaseInsensitive />}></Route>
        {/* 3 TOGGLE THEMES */}
        <Route path="/togglethemebasic" element={<ToggleThemeBasic />}></Route>
        <Route path="/togglethemeadvanced" element={<ToggleThemeAdvanced />}></Route>
        {/* 4 PAYMENT COMPONENT */}
        <Route path="/proceedtopayment" element={<ProceedToPayment/>}></Route>
         {/* 5 TIC TAC TOE */}
         <Route path='/tictactoe' element={<TicTacToe/>}></Route>
      </Routes>
    
   
  );
}

export default App;
