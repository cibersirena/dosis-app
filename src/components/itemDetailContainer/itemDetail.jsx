import { useState, useContext, useEffect } from 'react';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import { toast } from 'react-toastify';
import ItemCount from './itemCount';
import { cartContext } from '../context/cartProvider';
import { Link } from 'react-router-dom';

function ItemDetail ({producto}) {
    const imgUrl = "../../assets/productos/";
    const [agregarCarrito, setAgregarCarrito] = useState(false);
    const [unidadesLocal, setUnidadesLocal] = useState(0);
    const { agregarProducto } = useContext(cartContext);

    const onAdd = (unidades) => {
        unidades  > 0 ? setAgregarCarrito(true) : toast.warn("La cantidad debe ser mayor a 0");
        setUnidadesLocal(unidades);
    };
    
    useEffect( () => {
        unidadesLocal > 0 && agregarProducto(producto,unidadesLocal);
        // eslint-disable-next-line 
    }, [unidadesLocal]);

    return (
        <Row className='justify-content-around'>
            <div className='col-12 col-md-4 mb-5'>
                <img src={`${imgUrl}${producto.imagen}`} alt={producto.descripcion} className='w-100' />
            </div>
            <div className='col-12 col-md-5 mb-5'>
                <div className='text-center'>
                    <h2 className='fw-bolder'>{producto.tipo}</h2>
                    <h3 className='fw-bolder'>$ {producto.precio}.- </h3>
                    <p>{producto.descripcion} </p>
                    <h2><Badge pill bg="dark" className='badgeStock'>{producto.stock > 0 ? '' : 'sin stock'}</Badge></h2>
                    <ItemCount stock={producto.stock} onAdd={onAdd} className='pt-5' />
                </div>
                <div className='text-center mt-3'>
                    {agregarCarrito && 
                        <>
                        <Link to="../../cart" className='outline-dark btn btn-secondary mb-3 mx-1' id='finalizar'>Finalizar compra</Link>
                        <Link to="../../" className='outline-dark btn mb-3 mx-1' id='seguir'>Seguir comprando</Link>
                        </>}
                </div>
            </div>
        </Row>
    );
};

export default ItemDetail