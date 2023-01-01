import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';

export default function Item ({tipo,precio,imagen,descripcion, stock}) {
    
    return (
        <Col className='mb-5'>
            <Card className='h-100'>
                <Card.Img variant="top" src={imagen} alt={descripcion} />
                <Card.Body className='p-4 text-center'>
                    <Card.Title className='fw-bolder'>{tipo}
                        <Badge pill bg="dark" className='badgeStock'>{stock > 0 ? '' : 'sin stock'}</Badge>
                    </Card.Title>
                    <Card.Text>$ {precio}.- </Card.Text>
                </Card.Body>
                <Card.Footer className='p-4 pt-0 border-top-0 bg-transparent text-center'>
                    <Button variant="outline-dark" id='comprar'>Comprar</Button>
                </Card.Footer>
            </Card>
        </Col>
    );
}