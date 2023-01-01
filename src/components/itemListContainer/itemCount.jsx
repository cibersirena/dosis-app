import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState } from 'react';

function ItemCount ({stock}){
    let stockDisponible = stock > 0 ? '' : 'disabled';
    const [count, setCount] = useState(0);
    return (
        <>
            <Row className='justify-content-center mb-4'>
                <Col>
                    <Button variant='secondary' size='sm' className='p-0 m-0' disabled={stockDisponible} onClick={() => (stock > 0) && (count < stock) ? setCount(count + 1) : alert("No hay más stock, elegí una cantidad menor o igual a: "+ stock)}>
                        <i className='bi bi-plus-square text-dark'></i>
                    </Button>
                </Col>
                <Col className='counter'>
                    <p className='mb-0'>{count}</p>
                </Col>
                <Col>
                    <Button variant='secondary' size='sm' className='p-0 m-0' disabled={stockDisponible} onClick={() => (count > 0) && (count <= stock) ? setCount(count - 1) : alert("La cantidad no puede ser negativa")}>
                    <i className='bi bi-dash-square text-dark'></i>
                    </Button>
                </Col>
            </Row>
            <Button variant="outline-dark" id='comprar'>Comprar</Button>
        </> 
    )
};

export default ItemCount