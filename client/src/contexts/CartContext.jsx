/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState, useEffect } from "react"

const CartContext = createContext();

const getInitialState = () => {
    const cart = localStorage.getItem("cart")
    return cart ? JSON.parse(cart) : [];
}

export default function CartProvider ({children}) {
    const [cart, setCart] = useState(getInitialState)
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
      }, [cart]);
      return (
        <CartContext.Provider value={{ cart, setCart }}>
          {children}
        </CartContext.Provider>
      );
}