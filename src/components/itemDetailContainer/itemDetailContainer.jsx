import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import ItemDetail from './itemDetail';
import { productsCollection } from '../../firebaseConfig';
import { getDoc, doc } from 'firebase/firestore';

function ItemDetailContainer() {
    const [detalleItem, setDetalleItem] = useState({});
    const [loading, setLoading] = useState(true);
    const {productId} = useParams();

    useEffect( () => {
        const obtenerProducto = () => {
            setLoading(true);
            const referenciaProducto = doc(productsCollection, productId)
            const pedidoProducto = getDoc(referenciaProducto);

            pedidoProducto
            .then( (res) => {
                const productoEncontrado = { id: res.id, ...res.data()};
                setDetalleItem(productoEncontrado);
                setLoading(false);
            })
            .catch ( (err) => {
                err = "Se produjo un error al cargar el detalle del producto";
                toast.error(err);
            })
        };

        obtenerProducto();

    }, [productId]);

    return (
        <main className="pb-5">
            <Container className="px-4 px-lg-5 mt-5">
                {loading ? <div className='text-center'><Spinner animation="grow" variant="dark" size="sm" /> <Spinner animation="grow" variant="dark" /> <Spinner animation="grow" variant="dark" size="sm" /></div> : <ItemDetail producto={detalleItem} />} 
            </Container>
        </main>
    );
};

export default ItemDetailContainer;