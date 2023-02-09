import { useState } from "react";
import { createContext } from "react";
import { toast } from 'react-toastify';
import { salesCollection } from "../../firebaseConfig";
import { addDoc, getDoc, doc } from "firebase/firestore";

export const cartContext = createContext();
const { Provider } = cartContext;

const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([]);
    const [total, setTotal] = useState(0);
    const [unidades, setUnidades] = useState(0);
    const [totalPagar, setTotalPagar] = useState(0);
    const [detalleOrden, setDetalleOrden] = useState();
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
        };
        
        setCarrito(actualizacionCarrito);
        setTotal(producto.precio);
        setUnidades(actualizacionUnidades);
        setTotalPagar(actualizacionTotalPagar);
        toast.success("El producto se agregó con éxito al carrito");
    };

    const eliminarProducto = (idProduct) => {
        const existing = actualizacionCarrito.find((p) => p.id === idProduct);
        actualizacionUnidades = unidades - existing.unidades;
        actualizacionTotalPagar = totalPagar - (existing.precio * existing.unidades);

        actualizacionCarrito.splice(actualizacionCarrito.findIndex((p) => p.id === idProduct),1);
        
        setCarrito(actualizacionCarrito);
        setUnidades(actualizacionUnidades);
        setTotalPagar(actualizacionTotalPagar);
        toast.success("El producto se eliminó con éxito del carrito");
    };

    const vaciarCarrito = () => {
        setCarrito([]);
        setTotal(0);
        setUnidades(0);
        setTotalPagar(0);
        toast.success("El carrito se vació con éxito");
    };

    const venta = (compra) => {
        const agregarCompra = addDoc(salesCollection,compra);
        agregarCompra
        .then( (res) => {
            const idCompra = res.id;

            const obtenerOrden = () => {
                const referenciaOrden = doc(salesCollection,idCompra);
                const pedidoOrden = getDoc(referenciaOrden);
                pedidoOrden
                .then( (res) => {
                    const ordenEncontrada = { id: res.id, ...res.data()};
                    setDetalleOrden(ordenEncontrada);
                })
                .catch ( (err) => {
                    err = "Se produjo un error al cargar la orden de compra";
                    toast.error(err);
                });
            };

            obtenerOrden();
            setCarrito([]);
            setTotal(0);
            setUnidades(0);
            setTotalPagar(0);
        })
        .catch( (err) => {
            err = "Se produjo un error al generar la orden de compra"
            toast.error(err);
        }); 
    };

    const valorCartContext = {
        carrito,
        total,
        unidades,
        totalPagar,
        agregarProducto,
        eliminarProducto,
        vaciarCarrito,
        venta,
        detalleOrden
    };

    return (
        <Provider value={valorCartContext}>
            {children}
        </Provider>
    );
};

export default CartProvider;