import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import ItemCount from '../itemListContainer/itemCount';

export default function ItemDetail ({producto}) {
    const imgUrl = "../../assets/productos/";

    return (
        <Col className='mb-5'>
            <Card className='h-100'>
                <Card.Img variant="top" src={`${imgUrl}${producto.imagen}`} alt={producto.descripcion} />
                <Card.Body className='p-4 text-center'>
                    <Card.Title className='fw-bolder'>{producto.tipo}
                        <Badge pill bg="dark" className='badgeStock'>{producto.stock > 0 ? '' : 'sin stock'}</Badge>
                    </Card.Title>
                    <Card.Text>{producto.descripcion} </Card.Text>
                    <Card.Text>$ {producto.precio}.- </Card.Text>
                </Card.Body>
                <Card.Footer className='p-4 pt-0 border-top-0 bg-transparent text-center'>
                    <ItemCount stock={producto.stock} />  
                </Card.Footer>
            </Card>
        </Col>
    );
}