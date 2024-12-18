import React, { useEffect, useState,useContext} from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";


const Cart = () => {
  const navigate = useNavigate();
 const { carts } = useContext(UserContext);
  
  return (
    <>
    <div className="grid gap-x-14 gap-y-10 grid-cols-4 px-10 mx-auto max-w-screen mt-6">
    {Object.keys(cartItems)
        .filter((id) => cartItems[id] > 0)
        .map((id) => (
          <CartItem key={id} data={{ ...cartItems[id], id }} />
        ))}
    </div>
    </>
  );
};

export default Cart;
