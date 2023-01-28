
const CartItem = ({producto}) => {
    const imgUrl = "../../assets/productos/";
    return (
        <>
            <div className="col-1 d-flex align-items-center p-2">
                <img src={`${imgUrl}${producto.imagen}`} alt={producto.tipo} width="100%" />
            </div>
            <div className="col-2 d-flex align-items-center p-2">
                {producto.tipo}
            </div>
            <div className="col-2 d-flex align-items-center justify-content-end p-2">
                Precio unitario: $ {producto.precio}.-
            </div>
            <div className="col-2 d-flex align-items-center justify-content-end p-3">
                Unidades: {producto.unidades}
            </div>
            <div className="col-2 d-flex align-items-center justify-content-end p-3">
                Total: {producto.unidades * producto.precio}
            </div>
            <div className="col-2 d-flex align-items-center justify-content-end p-3">
                <i className="bi bi-x-circle"></i>
            </div>
        </>
    )
};

export default CartItem;