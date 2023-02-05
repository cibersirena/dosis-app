import Container from 'react-bootstrap/Container';
import { useContext } from 'react';
import { cartContext } from '../context/cartProvider';

function CartCheackout (props){
    const {compraRealizada} = useContext(cartContext);

    return (
        <main className="pb-5">
            <Container className="px-4 px-lg-5 mt-5">
                <h5 className="fw-lighter mb-5">{props.mensaje}</h5>
                <p>{JSON.stringify(compraRealizada)}</p>
            </Container>
        </main>
    );
};

export default CartCheackout;
