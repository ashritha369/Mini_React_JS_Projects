import React from "react";
import CartItem from "../CartItems/CartItem.component";
import "./CartDropdown.Styles.css";

const CartDropdown = (props) => {
  return (
    <div className="cart-dropdown-container">
      Cart Dropdown Here
      {(!props.cartItems || props.cartItems.length === 0) && (
        <h4>Please add cart items</h4>
      )}
      {props.cartItems &&
        props.cartItems.map((eachItem) => (
          <CartItem
            key={eachItem} // Add a unique key for each CartItem
            title={eachItem}
            handleRemoveFromCartItem={() => {
              props.setcartItems((prevItems) =>
                prevItems.filter((cartItem) => cartItem !== eachItem)
              );
            }}
          />
        ))}
    </div>
  );
};

export default CartDropdown;
