import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

const ProductCart = ({ product }) => {
  const { addToCart, cartList, removeFromCart } = useCart();
  const { id, name, price, image } = product;
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const productIsInCart = cartList.find((cartItem) => cartItem.id === id);

    if (productIsInCart) {
      setIsInCart(true);
    } else {
      setIsInCart(false);
    }
  }, [cartList, id]);
  return (
    <div className="productcart">
      <img src={image} alt={name} />
      <p className="name">{name}</p>
      <div className="action">
        <p>₹{price}</p>
        {isInCart ? (
          <button className="remove" onClick={() => removeFromCart(product)}>
            Remove
          </button>
        ) : (
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        )}
      </div>
    </div>
  );
};

export default ProductCart;
