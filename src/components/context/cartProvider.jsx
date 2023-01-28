import { useState } from "react";
import { createContext } from "react";

export const cartContext = createContext();
const { Provider } = cartContext;

const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [unidades, setUnidades] = useState(0);
    const [totalPagar, setTotalPagar] = useState(0);

    
    const agregarProducto = (producto, unidadesLocal) => {
        
        const actualizacionCarrito = [...carrito];
        producto.unidades = unidadesLocal;
        actualizacionCarrito.push(producto);

        const actualizacionUnidades = unidades + unidadesLocal;
        const actualizacionTotalPagar = totalPagar + (producto.precio * unidadesLocal);

        setCarrito(actualizacionCarrito);
        setTotal(producto.precio);
        setUnidades(actualizacionUnidades);
        setTotalPagar(actualizacionTotalPagar);
    };

    const eliminarProducto = (id) => {
        
        
    };

    const vaciarCarrito = () => {

    };

    const existeProducto = () => {

    };

    const modificarUnidades = () => {

    };

    const valorCartContext = {
        carrito,
        total,
        unidades,
        totalPagar,
        agregarProducto,
        eliminarProducto,
        vaciarCarrito,
        existeProducto,
        modificarUnidades
    };

    return (
        <Provider value={valorCartContext}>
            {children}
        </Provider>
    );
};

export default CartProvider