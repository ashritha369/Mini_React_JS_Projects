import CartItem from "../CartItems/CartItem.component";
import "./CartDropdown.Styles.css";

const CartDropdown = ({ cartArrayItems }) => {
  return (
    <div className="cart-dropdown-container">
      Cart Dropdown Here
      {cartArrayItems &&
        cartArrayItems.map((eachItem) => {
          return <CartItem title={eachItem} />;
        })}
      {/* <CartItem title={value} />
      <CartItem title={value} /> */}
    </div>
  );
};
export default CartDropdown;
