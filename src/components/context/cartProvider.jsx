import { createContext } from "react";

export const contexto = createContext();
const { Provider } = contexto;

const CartProvider = ({ children }) => {
    const valorCartContext = {
        carrito: [],
        total: 0
    };

    return (
        <Provider value={valorCartContext}>
            {children}
        </Provider>
    );
};

export default CartProvider