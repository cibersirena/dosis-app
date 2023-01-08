import Container from 'react-bootstrap/Container';

function About(props){
    return (
        <main className="pb-5">
            <Container className="px-4 px-lg-5 mt-5">
                <h5 className="fw-lighter mb-5">{props.mensaje}</h5>
            </Container>
        </main>
    );
};

export default About;