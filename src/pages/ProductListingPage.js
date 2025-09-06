import React, { useState } from "react";
import ProductCard from "../components/ProductCard";

const sampleProducts = [
  { id: 1, name: "Aloe Vera", price: 250, image: "https://via.placeholder.com/150" },
  { id: 2, name: "Snake Plant", price: 400, image: "https://via.placeholder.com/150" },
  { id: 3, name: "Peace Lily", price: 350, image: "https://via.placeholder.com/150" }
];

function ProductListingPage() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => setCart([...cart, product]);

  return (
    <div className="product-page">
      <h2>Our Plants</h2>
      <div className="grid">
        {sampleProducts.map((p) => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default ProductListingPage;
