import { dataProductos } from '../productos';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Badge from 'react-bootstrap/Badge';
import './navBar.css';

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

function Menu({ producto }) {
    return (
        <NavDropdown.Item href="#">{producto}</NavDropdown.Item>
    );
};

function Desplegable() {
    dataProductos.sort((a, b) => a.tipo.localeCompare(b.tipo));
    const productosItems = [];
    dataProductos.forEach((p) => {
        productosItems.push(p.item);
    });

    let unicosItems = new Set(productosItems);
    const menuDesplegable = [];
    unicosItems.forEach((p) => {
        menuDesplegable.push(p);
    });

    return (
        <>
            {menuDesplegable.map((p) => (
                <Menu key={p} producto={p} />
            ))}
        </>
    )
};

function BarraNavegacion() {
    return (
        <Navbar bg="light" expand="lg">
            <Container className="px-4 px-lg-5">
                <Navbar.Brand href="./index.html">
                    <img src="./logo-dosis.png" className="d-inline-block" alt="Dosis sublimación" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="navbarSupportedContent">
                    <Nav className="me-auto mb-2 mb-lg-0 ms-lg-0">
                        <Nav.Link href="./index.html">Inicio</Nav.Link>
                        <Nav.Link href="#">Quiénes somos</Nav.Link>
                        <NavDropdown title="Productos" id="navbarDropdown">
                            <Desplegable />
                        </NavDropdown>
                    </Nav>
                    <Button variant="outline-dark" className='me-3' id="registro">Registrate</Button>
                    <CartWidget />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default BarraNavegacion;