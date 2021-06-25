import React, { useState } from "react";
import { connect } from "react-redux";
import {Redirect} from "react-router-dom";
import {clearCart} from "../../redux/actions";

const Cart = ({ cart,clearCartProducts }) => {
  const [redirect,setredirect] = useState(false);
  const getTotal = () => {
    return cart.reduce(
      (acc, item) => acc + Number(item.price) * Number(item.quantity),
      0
    );
  };
  return (
    <div className="m-4">
      {redirect && <Redirect to="/" />}
      <h1>Cart</h1>
      {cart.length &&
        cart.map(({ name, quantity, price }) => (
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">
                {name} Rs {price} X {quantity} ={" "}
                {Number(price) * Number(quantity)}
              </h5>
            </div>
          </div>
        ))}

      <h1>Total = {getTotal()}</h1>

      <button
       className={"btn btn-success"} onClick={()=>{

        clearCartProducts();
        setredirect(true);
       }}
       >Place Order</button>
       </div>
  );
};

const mapStateToProps = (store) => ({
  cart: store.prodReducer.cart,
});

const mapDispatchToProps=(dispatch)=>({
  clearCartProducts: ()=>dispatch(clearCart()),
});
export default connect(mapStateToProps,mapDispatchToProps)(Cart);