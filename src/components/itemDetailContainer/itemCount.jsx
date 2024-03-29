import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

function ItemCount ({ stock, onAdd }){
    const [unidades, setUnidades] = useState(0);
    const [stockDisponible, setStockDisponible] = useState("");
    const [btnAgregarCarrito, setBtnAgregarCarrito] = useState(true);

    useEffect ( () => {
        let stockValor;
            if (stock > 0) {
                stockValor = "";
            }else{
                stockValor = 'disabled'
            };
        setStockDisponible(stockValor);
    },[stock]);

    const sumarUnidad = () => {
        (stock > 0) && (unidades < stock) ? setUnidades(unidades + 1) : toast.warn("No hay más stock, elegí una cantidad menor o igual a "+ stock)
    };

    const restarUnidad = () => {
        (unidades > 0) && (unidades <= stock) ? setUnidades(unidades - 1) : toast.warn("La cantidad no puede ser negativa")
    };

    const handleAddCart = () => {
        if (unidades > 0) {
            setBtnAgregarCarrito(false);
            setStockDisponible("disabled");
        };  
        onAdd(unidades);
    };

    return (
        <>
            <Row className='justify-content-center mb-4 mt-5'>
                <Col></Col>
                <Col>
                    <Button variant='secondary' size='sm' className='p-0 m-0' disabled={stockDisponible} onClick={sumarUnidad}>
                        <i className='bi bi-plus-square text-dark'></i>
                    </Button>
                </Col>
                <Col className='counter'>
                    <p className='mb-0'>{unidades}</p>
                </Col>
                <Col>
                    <Button variant='secondary' size='sm' className='p-0 m-0' disabled={stockDisponible} onClick={restarUnidad}>
                    <i className='bi bi-dash-square text-dark'></i>
                    </Button>
                </Col>
                <Col></Col>
            </Row>
            {(btnAgregarCarrito && stockDisponible==="") && <Button variant="outline-dark" id='comprar' onClick={handleAddCart}>Agregar al carrito</Button>}
        </> 
    );
};

export default ItemCount