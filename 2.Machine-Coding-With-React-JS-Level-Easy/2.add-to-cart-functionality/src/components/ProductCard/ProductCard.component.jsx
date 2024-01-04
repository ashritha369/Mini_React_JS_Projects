import "./ProductCard.styles.css";
const ProductCard = (props) => {
  console.log(props);

  return (
    <div className="single-product-container">
      <h1>{props.displayEachTitle}</h1>
      {/* <button>Remove</button> */}
      <button onClick={props.handleItemAddClick}>Add to Cart</button>
    </div>
  );
};
export default ProductCard;
