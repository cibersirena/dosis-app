import { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, Navigate } from 'react-router-dom';
import { cartContext } from '../context/cartProvider';
import CartItem from './cartItem';
import CartForm from './cartForm';
import { serverTimestamp } from "firebase/firestore";

function Cart (props) {
    const {carrito, totalPagar, vaciarCarrito, eliminarProducto, venta} = useContext(cartContext);
    const [carritoVacio, setCarritoVacio] = useState(true);
    const [compraRealizada, setCompraRealizada] = useState(false);

    useEffect ( () => {
        if (carrito.length === 0) {
           setCarritoVacio(false); 
        };
    },[carrito]);

    const delProduct = (idProduct) => {
        eliminarProducto(idProduct);
    };

    const handleCompra = (user) => {
        const compra = {
            usuario : user,
            carrito : carrito,
            total : totalPagar,
            fecha: serverTimestamp()
        };
        venta(compra);
        setCompraRealizada(true);
    };

    return (
        <main className="pb-5">
            <Container className="px-4 px-lg-5 mt-5">
                {compraRealizada 
                ? <Navigate replace to="../cheackout" /> 
                : <>
                    <h5 className="fw-lighter mb-5" id="mensajeUser">{props.mensaje}</h5>
                    <Row className='justify-content-center'>
                        {carritoVacio ?
                        <>
                            <Col sm={5} xs={12} className='mx-4 border border-secondary-subtle pb-4'>
                                {carrito.map( (p, index) => ( <CartItem key={'producto_'+index} producto={p} delProduct={delProduct}>  </CartItem> ))} 
                                <h5 className='text-end fw-bold'>total pagar: $ {totalPagar}.- </h5>
                                <Link to="../../" className='outline-dark btn me-2 mt-4' id='seguir'>Seguir comprando</Link>
                                <button className='outline-dark btn btn-secondary me-2 mt-4' id='vaciar' onClick={vaciarCarrito}>Vaciar carrito</button>
                            </Col>
                            <Col sm={5} xs={12} className='mx-4 border border-secondary-subtle'>
                                <h6 className='fw-bold mt-3'>Completa tus datos para finalizar tu compra</h6>
                                <CartForm handleCompra={handleCompra}></CartForm>
                            </Col>
                        </>
                        : <Col sm={10} className='mx-4 border border-secondary-subtle text-center'>
                            <p className='fw-bold mt-3'>Tu carrito está vacío</p>
                            <Link to="../../" className='outline-dark btn mb-3 mx-2' id='volver'>Volver</Link>
                        </Col>}      
                    </Row>
                </>}
            </Container>
        </main>
    );
};

export default Cart;