import React from "react";
import { useCart } from "../context/CartContext";

const ProductCart = ({ product }) => {
  const { addToCart } = useCart();
  const { name, price, image } = product;
  return (
    <div className="productcart">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>₹{price}</p>
        <button onClick={() => addToCart(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default ProductCart;
