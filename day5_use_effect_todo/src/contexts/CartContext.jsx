import { createContext } from "react";
const CartContext = createContext();
export const CartContextProvider = ({ children }) => {
    return <CartContext.Provider value={28}>{children}</CartContext.Provider>
}