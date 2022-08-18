import React, { createContext, useState } from "react";
export const CartContext = createContext();

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  //Agregar al carrito
  const addToCart = (item, quantity) => {
    const addItem = { ...item, quantity: quantity };

    //Verificar si un item está o no dentro del carrito, lógica de duplicados.
    const isInCart = cart.some((e) => e.id === item.id);
    const change = cart.findIndex((e) => e.id === item.id);
    return isInCart
      ? cart.splice(change, 1, addItem)
      : setCart([...cart, addItem]);
  };

  //Borrar del carrito usando su id
  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  //Vaciar carrito
  const clearCart = () => {
    setCart([]);
  };
  //Sumar precios totales
  const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
