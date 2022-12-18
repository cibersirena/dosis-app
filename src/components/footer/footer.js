import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./footer.css";

function Footer() {
    return (
        <footer className="py-5 bg-dark bg-secondary">
            <Container fluid className='position-relative'>
                <Row className='justify-content-around'>
                    <Col lg={6} md={6} sm={7}>
                        <p className="m-0 text-center text-white">Copyright &copy; Cibersirena Design 2022</p>
                    </Col>
                    <Col lg={6} md={6} sm={3} className="d-flex justify-content-center">
                        <p className="mb-0 text-white">Contacto:</p>
                        <a href="https://www.facebook.com/dosissublimacion" target="_blank" rel="noreferrer"><i className="bi bi-facebook ms-4"></i></a>
                        <a href="https://www.instagram.com/dosissublimacion" target="_blank" rel="noreferrer"><i className="bi bi-instagram ms-4"></i></a>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;