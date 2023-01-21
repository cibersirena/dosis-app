import { useState } from 'react';
import Badge from 'react-bootstrap/Badge';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ItemCount from './itemCount';

export default function ItemDetail ({producto}) {
    const [agregarCarrito, setAgregarCarrito] = useState(false);

    const handleAdd = (unidades) => {
        console.log(unidades);
        unidades  > 0 ? setAgregarCarrito(true) : alert("La cantidad debe ser mayor a 0");
    }

    const imgUrl = "../../assets/productos/";

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
                    
                    <ItemCount stock={producto.stock} handleAdd={handleAdd} className='pt-5' />
                    
                </div>
                <div className='text-center mt-3'>
                    {agregarCarrito && <Button variant="outline-dark" id='ir-carrito' >Agregar al carrito</Button>}
                </div>
            </div>
        </Row>
    );
}