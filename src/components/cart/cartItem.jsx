import Row from 'react-bootstrap/Row';

const CartItem = ({producto}) => {
    const imgUrl = "../../assets/productos/";
    return (
        <Row className='justify-content-center'>
            <div className="col-2 d-flex align-items-center p-2">
                <img src={`${imgUrl}${producto.imagen}`} alt={producto.tipo} width="100%" />
            </div>
            <div className="col-2 d-flex align-items-center p-2">
                {producto.tipo}
            </div>
            <div className="col-2 d-flex align-items-center p-2">
                $ {producto.precio}.-
            </div>
            <div className="col-2 d-flex align-items-center p-3">
                {producto.unidades}
            </div>
            <div className="col-2 d-flex align-items-center p-3">
                <strong>$ {producto.unidades * producto.precio}.-</strong>
            </div>
            <div className="col-2 d-flex align-items-center p-3">
                <i className="bi bi-x-circle"></i>
            </div>
        </Row>
    )
};

export default CartItem;