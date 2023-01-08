import { useEffect, useState } from 'react';
import { dataProductos } from '../productos';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import ItemDetail from './itemDetail';

function ItemDetailContainer() {
    const [detalleItem, setDetalleItem] = useState({});
    const {productId} = useParams();

    useEffect( () => {
        const obtenerProducto = () => {
            return new Promise( (resolve,reject) => {
                setTimeout( ()=> {
                    dataProductos ? 
                    resolve(dataProductos) : reject("Se produjo un error al cargar el detalle del producto")
                }, 500); 
            })
        };
        obtenerProducto().then( (res) => {
            const productoEncontrado = res.find( (pe) => pe.id.toString() === productId )
            setDetalleItem(productoEncontrado)

        }).catch ( (err) => {
            alert(err)
        });
    }, [productId])

    return (
        <main className="pb-5">
            <Container className="px-4 px-lg-5 mt-5">
                <ItemDetail producto={detalleItem} />
            </Container>
        </main>
    );
};

export default ItemDetailContainer;