import { useState } from "react";
import { createContext } from "react";

export const cartContext = createContext();
const { Provider } = cartContext;

const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [unidades, setUnidades] = useState(0);
    const [totalPagar, setTotalPagar] = useState(0);
    let actualizacionCarrito = [...carrito];
    let actualizacionUnidades;
    let actualizacionTotalPagar;

    const agregarProducto = (producto, unidadesLocal) => {
        actualizacionUnidades = unidades + unidadesLocal;
        actualizacionTotalPagar = totalPagar + (producto.precio * unidadesLocal);
        
        const existing = actualizacionCarrito.find((p) => p.id === producto.id);
        if (existing) {
            const index = actualizacionCarrito.findIndex(e => e === existing);
            producto.unidades = existing.unidades + unidadesLocal; 
            actualizacionCarrito[index] = { ...producto };
        }else {
            producto.unidades = unidadesLocal; 
            actualizacionCarrito.push(producto);
        }
        
        setCarrito(actualizacionCarrito);
        setTotal(producto.precio);
        setUnidades(actualizacionUnidades);
        setTotalPagar(actualizacionTotalPagar);
  
    };

    const eliminarProducto = (idProduct) => {
        const existing = actualizacionCarrito.find((p) => p.id === idProduct);
        actualizacionUnidades = unidades - existing.unidades;
        actualizacionTotalPagar = totalPagar - (existing.precio * existing.unidades);

        actualizacionCarrito.splice(actualizacionCarrito.findIndex((p) => p.id === idProduct),1);
        
        setCarrito(actualizacionCarrito);
        setUnidades(actualizacionUnidades);
        setTotalPagar(actualizacionTotalPagar);
    };

    const vaciarCarrito = () => {
        setCarrito([]);
        setTotal(0);
        setUnidades(0);
        setTotalPagar(0);
    };

    const valorCartContext = {
        carrito,
        total,
        unidades,
        totalPagar,
        agregarProducto,
        eliminarProducto,
        vaciarCarrito
    };

    return (
        <Provider value={valorCartContext}>
            {children}
        </Provider>
    );
};

export default CartProvider;