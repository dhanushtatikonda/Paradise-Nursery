import React from "react";

function CartItem({ item, removeFromCart }) {
  return (
    <div className="cart-item">
      <h4>{item.name}</h4>
      <p>₹{item.price}</p>
      <button onClick={() => removeFromCart(item)}>Remove</button>
    </div>
  );
}

export default CartItem;
