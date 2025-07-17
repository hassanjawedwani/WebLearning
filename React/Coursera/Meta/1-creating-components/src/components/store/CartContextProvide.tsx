import { createContext, useContext, useState, type ReactNode } from "react";

type CartType = {
  cartItems: string[];
  cartCount: number;
};

type PropsType = {
  children: ReactNode;
};

const CartContext = createContext<CartType>({
    cartItems: [],
    cartCount: 0,
  });

const CartContextProvide = ({ children }: PropsType) => {
  const [cart, setCart] = useState<CartType>({
    cartItems: [],
    cartCount: 8,
  });
  return <CartContext.Provider value={cart}>{children}</CartContext.Provider>;
};

export const useCartContext = () => useContext(CartContext);

export default CartContextProvide;
