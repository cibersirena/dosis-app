import { useContext, useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import { cartContext } from '../context/cartProvider';
import CartItem from './cartItem';
import { serverTimestamp, addDoc } from "firebase/firestore";
import { salesCollection } from "../../firebaseConfig";

function Cart (props) {
    const {carrito, totalPagar, vaciarCarrito, eliminarProducto} = useContext(cartContext);
    const [carritoVacio, setCarritoVacio] = useState(true);

    useEffect ( () => {
        if (carrito.length === 0) {
           setCarritoVacio(false); 
        };
    },[carrito]);

    const delProduct = (idProduct) => {
        eliminarProducto(idProduct);
    };

    const handleCompra = () => {
        const compra = {
            usuario : {
                nombre: "Gabriela",
                email: "gabriela@gmail.com",
                telefono: "1160466975"
            },
            carrito : carrito,
            fecha: serverTimestamp()
        };

        const venta = addDoc(salesCollection,compra);
        venta
        .then( (res) => {
            console.log(res)
        } )
        .catch( (err) => {
            alert(err);
        } )
    };

    return (
        <main className="pb-5">
            <Container className="px-4 px-lg-5 mt-5">
                <h5 className="fw-lighter mb-5" id="mensajeUser">{props.mensaje}</h5>
                <Row className='justify-content-center'>
                    {carritoVacio ?
                    <>
                        <Col sm={6} xs={12} className='mx-4 border border-secondary-subtle'>
                            {carrito.map( (p, index) => ( <CartItem key={'producto_'+index} producto={p} delProduct={delProduct}>  </CartItem> ))} 
                            <h5 className='text-end fw-bold'>total pagar: $ {totalPagar}.- </h5>
                            <Link to="../../" className='outline-dark btn mb-3 mx-2' id='seguir'>Seguir comprando</Link>
                            <button className='outline-dark btn btn-secondary mb-3' onClick={vaciarCarrito}>Vaciar carrito</button>
                        </Col>
                        <Col sm={5} xs={12}>
                            <p>Completa tus datos para finalizar tu compra</p>
                            <button className='outline-dark btn mb-3' onClick={handleCompra}>Confirmar compra</button>
                        </Col>
                    </>
                    : <Col sm={10} className='mx-4 border border-secondary-subtle text-center'>
                        <p className='fw-bold mt-3'>Tu carrito está vacío</p>
                        <Link to="../../" className='outline-dark btn mb-3 mx-2' id='seguir'>Volver</Link>
                    </Col>
                    }      
                </Row>
            </Container>
        </main>
    );
};

export default Cart;