import Container from 'react-bootstrap/Container';
import { useContext, useEffect, useState } from 'react';
import { cartContext } from '../context/cartProvider';
import Spinner from 'react-bootstrap/Spinner';
import Row from 'react-bootstrap/Row';
import { Link } from 'react-router-dom';

function CartCheackout (props){
    const {detalleOrden} = useContext(cartContext);
    const [loading, setLoading] = useState(true);
    const [fecha, setFecha] = useState("");
    const imgUrl = "../../assets/productos/";

    useEffect ( () => {
        if (detalleOrden === undefined) {
            setLoading(true);
        }else {
            const date = new Date(detalleOrden.fecha.toDate()).toDateString();
            setFecha(date);
            setLoading(false);
        };
    },[detalleOrden])

    return (
        <main className="pb-5">
            <Container className="px-4 px-lg-5 mt-5">
                {loading 
                ? <div className='text-center'><Spinner animation="grow" variant="dark" size="sm" /> <Spinner animation="grow" variant="dark" /> <Spinner animation="grow" variant="dark" size="sm" /></div> 
                : <>
                <h4 className="fw-lighter mb-3">{`${detalleOrden.usuario.nombre} ${props.mensaje}`}</h4>
                <h5 className='fw-bold mb-3 text-dark '>Orden de compra: {detalleOrden.id}</h5>
                <h5>Datos de tu compra</h5>
                <p className='mb-0'>Fecha: {fecha}</p>
                <p className='mb-0'>Nombre: {detalleOrden.usuario.nombre} </p>
                <p className='mb-0'>email: {detalleOrden.usuario.email}</p>
                <p>Teléfono: {detalleOrden.usuario.telefono}</p>
                <h5 className='mb-3'>Artículos comprados</h5>
                <Row className='gx-4 gx-lg-5 justify-content-start' id='productos' xs={1} md={2} xl={3}>
                    {detalleOrden.carrito.map( (p, index) => ( 
                        <div key={index} className='d-flex'>
                            <div className='w-25'>
                                <img src={`${imgUrl}${p.imagen}`} alt={p.tipo} className='w-100' />
                            </div>
                            <div className='mx-3'>
                                <p className='mb-0 fw-bold'>{p.tipo}</p>
                                <p className='mb-0'>Unidades: {p.unidades} - $ {p.precio}.- c/u </p>
                                <p className='mb-0 fw-bold'>Total $ {p.unidades * p.precio}.-</p>
                            </div>
                        </div> ))
                    }
                </Row>
                <h5 className='mt-3'>Total pagado: $ {detalleOrden.total}.- </h5>
                <Link to="../../" className='outline-dark btn mt-3' id='volver'>Volver</Link>
                </>}
            </Container>
        </main>
    );
};

export default CartCheackout;