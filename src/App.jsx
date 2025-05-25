// src/App.jsx
import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import products from "./components/data/products";
import promotions from "./components/data/promotions";
import Footer from "./components/Footer";

export default function App() {
  const [cart, setCart] = useState([]);
  const [view, setView] = useState("home");

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (indexToRemove) => {
    const updatedCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(updatedCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div>
      <Header setView={setView} cartCount={cart.length} />
      <div className="container mt-4">
        {view === "home" && (
          <ProductList products={products} addToCart={addToCart} />
        )}
        {view === "cart" && (
          <Cart
            cart={cart}
            removeFromCart={removeFromCart}
            clearCart={clearCart}
          />
        )}
        {view === "promotions" && (
          <ProductList
            products={promotions.map((promo) => ({
              ...promo,
              discountedPrice: (promo.price * 0.8).toFixed(2),
            }))}
            addToCart={addToCart}
          />
        )}
        {view === "about" && (
          <h2>Somos una tienda dedicada a vender productos de calidad.</h2>
        )}
      </div>
      <Footer />
    </div>
  );
}
