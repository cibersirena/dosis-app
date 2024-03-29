import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';

function Item ({item,url}) {
    const imgUrl = url ? "../../assets/productos/" : "./assets/productos/";

    return (
        <Col className='mb-5'>
            <Card className='h-100'>
                <Card.Img variant="top" src={`${imgUrl}${item.imagen}`} alt={item.descripcion} />
                <Card.Body className='p-4 text-center'>
                    <Card.Title className='fw-bolder'>{item.tipo}
                        <Badge pill bg="dark" className='badgeStock'>{item.stock > 0 ? '' : 'sin stock'}</Badge>
                    </Card.Title>
                    <Card.Text>$ {item.precio}.- </Card.Text>
                </Card.Body>
                <Card.Footer className='p-4 pt-0 border-top-0 bg-transparent text-center'>
                     <Link to={`../../detail/${item.id.toString()}`} className='btn btn-primario'>Ver detalle</Link>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Item;