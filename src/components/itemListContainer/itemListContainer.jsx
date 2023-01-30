import Container from 'react-bootstrap/Container';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import ItemList from './itemList';
import './itemListContainer.css';
import { productsCollection } from '../../firebaseConfig';
import { getDocs, query, where, orderBy } from 'firebase/firestore';

function ItemListContainer(props) {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    const {categoryItem} = useParams();
    const categoryFilter = categoryItem ? categoryItem.toUpperCase() : "";

    useEffect( () => {
        const cargarProductos = () => {
            
            setLoading(true);

            const productosFinales = categoryItem ? query(productsCollection,where("item","==",categoryItem)) : query(productsCollection,orderBy("tipo"));
           
            const pedidoProductos = getDocs(productosFinales)

            pedidoProductos
            .then( (res) => { 
                const productos = res.docs.map( (doc) => {
                    return { id: doc.id, ...doc.data()}
                });

                setProductos(productos);
                setLoading(false);
                
            })
            .catch( (err) => {
                err = "Se produjo un error al cargar los productos"
                alert(err)
            })
        };

        cargarProductos()

    }, [categoryItem]);

    return (
        <main className="pb-5">
            <Container className="px-4 px-lg-5 mt-5">
                <h5 className="fw-lighter mb-5" id="mensajeUser">{props.mensaje + categoryFilter.replace(/(-)/gm, ' ')}</h5>
                <Row className='gx-4 gx-lg-5 justify-content-center' id="productos" xs={2} md={3} xl={4}>
                    {loading ? <div className='text-center'><Spinner animation="grow" variant="dark" size="sm" /> <Spinner animation="grow" variant="dark" /> <Spinner animation="grow" variant="dark" size="sm" /></div> : <ItemList productos={productos} categoryItem={categoryItem} /> }
                </Row>  
            </Container>
        </main>
    );
};

export default ItemListContainer;