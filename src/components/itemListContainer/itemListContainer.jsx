import Container from 'react-bootstrap/Container';
import ItemList from './itemList';
import './itemListContainer.css';

function ItemListContainer(props) {
    return (
        <main className="pb-5">
            <Container className="px-4 px-lg-5 mt-5">
                <h5 className="fw-lighter mb-5" id="mensajeUser">{props.mensaje}</h5>
                <ItemList />
            </Container>
        </main>
    );
};

export default ItemListContainer;