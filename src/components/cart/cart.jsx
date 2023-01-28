import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { cartContext } from '../context/cartProvider';
import CartItem from './cartItem';

function Cart (props) {

    const {carrito, totalPagar, eliminarProducto} = useContext(cartContext);

    
   /* const deleteCart = () => {
        
        eliminarProducto();
    };*/
    
    return (
        <main className="pb-5">
            <Container className="px-4 px-lg-5 mt-5">
                <h5 className="fw-lighter mb-5" id="mensajeUser">{props.mensaje}</h5>
                <Row className='justify-content-center' id="productos-carrito">
                   {carrito.map( (p, index) => ( <CartItem key={'producto_'+index} producto={p}>  </CartItem>  ) )} 
                </Row>
                
                <p>total pagar {totalPagar} </p>
                
            </Container>
        </main>
    );
};

export default Cart;