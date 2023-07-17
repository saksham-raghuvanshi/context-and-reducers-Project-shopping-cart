import React from "react";
import { useTitle } from "../Custom-hook/useTitle";
import CartCard from "../Components/CartCard";
import { useCart } from "../context/CartContext";

const Cart = () => {
  useTitle("Cart");
  const { total } = useCart();

  const products = [
    {
      id: 1001,
      name: "Sony Wh-Ch510 Bluetooth Wireless",
      price: 30000,
      image: "/assets/images/1001.png",
    },
    {
      id: 1002,
      name: "boAt Rockerz 450",
      price: 3000,
      image: "/assets/images/1002.png",
    },
  ];
  return (
    <main>
      <section lassName="cart">
        <h1>
          Cart Item:{products.length} / ₹{total}
        </h1>
        {products.map((product) => (
          <CartCard key={product.id} product={product} />
        ))}
      </section>
    </main>
  );
};

export default Cart;
