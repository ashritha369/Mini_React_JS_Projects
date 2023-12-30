// import { useContext } from "react";

const handleProceedToPayment=()=>{

}
const ProceedToPayment = () => {
  return (
    <div className="proceed-to-payment-container">
      <div className="total-amount-div">{369}</div>
      <button className="payment-button" onClick={handleProceedToPayment}>Pay</button>
    </div>
  );
};
export default ProceedToPayment;
