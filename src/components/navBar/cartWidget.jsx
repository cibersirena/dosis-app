import { useContext } from 'react';
import Badge from 'react-bootstrap/Badge';
import { Link } from 'react-router-dom';
import { cartContext } from '../context/cartProvider';

function CartWidget() {
    const { unidades } = useContext(cartContext);
    
    return (
        <Link to='./cart' className='btn btn-principal'>
            <i className="bi-cart-fill me-2"></i>
            Carrito
            <Badge pill bg="dark" className='ms-1'>{unidades}</Badge>
        </Link>
    );
};

export default CartWidget;