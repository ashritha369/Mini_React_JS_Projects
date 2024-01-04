import { useEffect, useState } from "react";
import "./App.css";
import CartDropdown from "./components/CartDropdown/CartDropdown.Component";
import ProductCard from "./components/ProductCard/ProductCard.component";

const App = () => {
  const [data, setData] = useState(null);
  const [cartItems, setcartItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const onlineData = await fetch("https://dummyjson.com/products");
        const jsonData = await onlineData.json();
        setData(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <h1 style={{ color: "orangered" }}>Add to Cart Functionality</h1>
      <h2 style={{ color: "purple" }}>Cart Icon Display</h2>
      <button>Cart Icon</button>
      <h2 style={{ color: "purple" }}> Cart Drop Down Display</h2>
      {/* Directly pass the last added title to CartDropdown */}
      <CartDropdown cartArrayItems={cartItems} />

      <h2 style={{ color: "green" }}>Products Display</h2>

      {data && data.products ? (
        data.products.map((item) => (
          <ProductCard
            key={item.id}
            handleItemAddClick={() => {
              setcartItems([...cartItems, item.title]);
            }}
            displayEachTitle={item.title}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;