import React, { createContext, useContext } from "react";

const initialState = {
  cartList: [],
  total: 0,
};

const CartContext = createContext();
export const CartProvider = ({ children }) => {
  const value = {
    total: 0,
  };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
