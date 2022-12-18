import "./header.css";
import Container from 'react-bootstrap/Container';

function Header(){
    return (
        <header className="bg-dark">
            <Container className="px-4 px-lg-5 my-5">
                <div className="text-white">
                    <h1 className="display-4 fw-bolder">Bienvenidos a <br/> Dosis sublimación</h1>
                    <p className="lead fw-normal text-white mb-0">productos sublimados y personalizados a tu alcance</p>
                </div>
            </Container>
        </header>
    )
};

export default Header;