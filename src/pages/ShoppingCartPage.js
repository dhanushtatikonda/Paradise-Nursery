import React, { useState } from "react";
import CartItem from "../components/CartItem";

function ShoppingCartPage() {
  const [cart, setCart] = useState([
    { id: 1, name: "Aloe Vera", price: 250 },
    { id: 2, name: "Snake Plant", price: 400 }
  ]);

  const removeFromCart = (item) =>
    setCart(cart.filter((c) => c.id !== item.id));

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-page">
      <h2>Your Shopping Cart</h2>
      {cart.map((item) => (
        <CartItem key={item.id} item={item} removeFromCart={removeFromCart} />
      ))}
      <h3>Total: ₹{total}</h3>
      <button disabled={cart.length === 0}>Checkout</button>
    </div>
  );
}

export default ShoppingCartPage;
