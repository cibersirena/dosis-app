import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { cartContext } from '../context/cartProvider';
import CartItem from './cartItem';
import { serverTimestamp, addDoc } from "firebase/firestore";
import { salesCollection } from "../../firebaseConfig";

function Cart (props) {

    const {carrito, totalPagar} = useContext(cartContext);

    const handleCompra = () => {
        const compra = {
            usuario : {
                nombre: "Gabriela",
                email: "gabriela@gmail.com",
                telefono: "1160466975"
            },
            carrito : carrito,
            fecha: serverTimestamp()
        }

        const venta = addDoc(salesCollection,compra);
        venta
        .then( (res) => {
            console.log(res)
        } )
        .catch( (err) => {
            alert(err);
        } )

    }

   /* const deleteCart = () => {
        
        eliminarProducto();
    };*/
    
    return (
        <main className="pb-5">
            <Container className="px-4 px-lg-5 mt-5">
                <h5 className="fw-lighter mb-5" id="mensajeUser">{props.mensaje}</h5>
                <Row className='justify-content-center'>
                    <div className="col-2 d-flex align-items-center p-2">
                        <p className='text-center'>Imagen del producto</p>
                    </div>
                    <div className="col-2 d-flex align-items-center p-2">
                        <p className='text-center'>Producto</p>
                    </div>
                    <div className="col-2 d-flex align-items-center p-2">
                        <p className='text-center'>Precio unitario</p>
                    </div>
                    <div className="col-2 d-flex align-items-center p-3">
                        <p className='text-center'>Unidades</p>
                    </div>
                    <div className="col-2 d-flex align-items-center p-3">
                        <p className='text-center'><strong>Total</strong></p>
                    </div>
                    <div className="col-2 d-flex align-items-center p-3">

                    </div>
                </Row>
                {carrito.length !== 0 
                ? carrito.map( (p, index) => ( <CartItem key={'producto_'+index} producto={p}>  </CartItem> )) 
                : <p><strong>Tu carrito está vacío</strong></p> } 
                
                <Row id="footer-carrito" className='text-center'>
                    <h5>total pagar: $ {totalPagar}.- </h5>
                    <button onClick={handleCompra}>Confirmar compra</button>
                </Row>

            </Container>
        </main>
    );
};

export default Cart;