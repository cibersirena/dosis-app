import Container from 'react-bootstrap/Container';

function Greeting(props) {
    return (
        <main className="pb-5">
            <Container className="px-4 px-lg-5 mt-5">
                <h5 className="fw-lighter mb-3" id="mensajeUser">{props.mensaje}</h5>
            </Container>
        </main>
    );
};

export default Greeting;