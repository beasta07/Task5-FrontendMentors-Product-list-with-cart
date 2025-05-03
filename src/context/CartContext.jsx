import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (data) => {
    setCartItems((prevItems) => [...prevItems, data]);
    console.log(cartItems,'cart items in add to cart')
  };
  const clearCart = () => {
   setCartItems([])
  }
  const removeRow = (data) => {
    setCartItems(prev => prev.filter(item => item.id !== data.id))
}

  return (
    <CartContext.Provider value={{ cartItems, addToCart,clearCart,removeRow }}>
      {children}
    </CartContext.Provider>
  );
};

export { CartProvider, CartContext };
