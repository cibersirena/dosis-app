import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import CartWidget from './cartWidget';
import MenuDesplegable from './menuDesplegable';
import Logo from '../../assets/logo-dosis.png';
import './navBar.css';

function BarraNavegacion() {
    return (
        <Navbar bg="light" expand="lg">
            <Container className="px-4 px-lg-5">
                <Navbar.Brand href="./index.html">
                    <img src={Logo} className="d-inline-block" alt="Dosis sublimación" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="navbarSupportedContent">
                    <Nav className="me-auto mb-2 mb-lg-0 ms-lg-0">
                        <Nav.Link href="./index.html">Inicio</Nav.Link>
                        <Nav.Link href="#">Quiénes somos</Nav.Link>
                        <NavDropdown title="Productos" id="navbarDropdown">
                            <MenuDesplegable />
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