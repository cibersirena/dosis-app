import { dataProductos } from '../productos';
import { useEffect, useState } from 'react';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import Item from './item';


function fetchProductos() {
    return new Promise ( (resolve,reject) => {
        setTimeout( ()=> {
            dataProductos ? 
            resolve(dataProductos) : reject("Se produjo un error al cargar los productos")
        }, 3000);   
    });
}

function ItemList () {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect( () => {
        setLoading(true);
        fetchProductos().then( (res) => {
            res.sort((a, b) => a.tipo.localeCompare(b.tipo));
            setProductos(res);
            setLoading(false);
        }).catch( (err) => {
            alert(err)
        });
    }, []);

    return (
        <Row className='gx-4 gx-lg-5 justify-content-center' id="productos" xs={2} md={3} xl={4}>
            {loading ? <div className='text-center'><Spinner animation="grow" variant="dark" size="sm" /> <Spinner animation="grow" variant="dark" /> <Spinner animation="grow" variant="dark" size="sm" /></div> : productos.map( (p, index) => ( <Item key={'producto_'+index} tipo={p.tipo} precio={p.precio} imagen={p.imagen} descripcion={p.descripcion} stock={p.stock} /> ) )
            }
        </Row>        
    );
};

export default ItemList