import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';

function CartWidget() {
    return (
        <Link to='./cart' className='btn btn-principal'>
            <i className="bi-cart-fill me-2"></i>
            Carrito
            <Badge pill bg="dark" className='ms-1'>0</Badge>
        </Link>
    );
};

export default CartWidget;