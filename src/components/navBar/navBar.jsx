import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from './cartWidget';
import MenuDesplegable from './menuDesplegable';
import Logo from '../../assets/logo-dosis.png';
import { Link, NavLink } from 'react-router-dom';
import './navBar.css';

function BarraNavegacion() {
    return (
        <Navbar bg="light" expand="lg">
            <Container className="px-4 px-lg-5">
                <Link className='navbar-brand' to="./">
                    <img src={Logo} className="d-inline-block" alt="Dosis sublimación" />
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="navbarSupportedContent">
                    <Nav className="me-auto mb-2 mb-lg-0 ms-lg-0">
                        <NavLink to="./" className='nav-link'>Inicio</NavLink>
                        <NavLink to="./about" className='nav-link'>Quiénes somos</NavLink>
                        <NavDropdown title="Productos" id="navbarDropdown">
                            <MenuDesplegable />
                        </NavDropdown>
                    </Nav>
                    <Link to="./about" className='me-3 btn btn-principal'>Registrate</Link> 
                    <CartWidget />
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default BarraNavegacion;