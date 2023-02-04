import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

function CartItem ({producto, delProduct}) {
    const imgUrl = "../../assets/productos/";

    const handleDelProduct = () => {
        const idProduct = producto.id;
        delProduct (idProduct);
    };

    return (
        <Row className='justify-content-center'>
            <Col sm={3} xs={4} className="p-3">
                <img src={`${imgUrl}${producto.imagen}`} alt={producto.tipo} className='w-100' />
            </Col>
            <Col sm={9} xs={6} className="p-3">
                <p className='mb-0 fw-bold'>{producto.tipo}</p>
                <p className='mb-0'>Unidades: {producto.unidades} - $ {producto.precio}.- c/u </p>
                <p className='mb-0 fw-bold'>Total $ {producto.unidades * producto.precio}.-</p>
                <Button size='sm' className='btn btn-secondary' onClick={handleDelProduct}>
                    <i className="bi bi-trash3"></i> Eliminar
                </Button>
                
            </Col>  
        </Row>
    )
};

export default CartItem;