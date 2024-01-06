import "./CartItem.styles.css";
const CartItem = (props) => {
  return (
    <div className="each-cart-item-container">
      {props.title}
      <button onClick={props.handleRemoveFromCartItem}>X</button>
    </div>
  );
};
export default CartItem;
