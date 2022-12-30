import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Badge from 'react-bootstrap/Badge';

function CartWidget() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" className='btn-outline-dark' onClick={handleShow}>
                <i className="bi-cart-fill me-2"></i>
                Carrito
                <Badge pill bg="dark" className='ms-1'>0</Badge>
            </Button>

            <Offcanvas show={show} onHide={handleClose} placement="end">
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Tu carrito de compras</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div id='idCarrito'>
                        Mostrar los productos comprados
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default CartWidget;