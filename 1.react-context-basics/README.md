# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


# Creating the routes in App js

--> install  `yarn add react-router-dom`
--> Inside App JS
```
import { Routes, Route } from "react-router-dom";
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

```

--> Inside Index.js we have to import browser router as `import { BrowserRouter } from "react-router-dom";`and wrap it like below:

```
    <BrowserRouter>
      <App />
    </BrowserRouter>
```

--> Refer [https://www.w3schools.com/react/react_router.asp](https://www.w3schools.com/react/react_router.asp)

--> Refer [https://v5.reactrouter.com/web/guides/quick-start](https://v5.reactrouter.com/web/guides/quick-start)