import { dataProductos } from '../productos';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import Item from './item';

function ItemList () {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);

    const {categoryItem} = useParams();

    useEffect( () => {
        const cargarProductos = () => {
            return new Promise ( (resolve,reject) => {
                setTimeout( ()=> {
                    dataProductos ? 
                    resolve(dataProductos) : reject("Se produjo un error al cargar los productos")
                }, 2000);   
            });
        }

        setLoading(true);
        cargarProductos().then( (res) => {
            res.sort((a, b) => a.tipo.localeCompare(b.tipo));
            const productosFiltrados = res.filter( (prod) => prod.item.toLowerCase().replace(/\s+/g, '') === categoryItem );
            const productosFinales = categoryItem ? productosFiltrados : res;
            setProductos(productosFinales);
            setLoading(false);
        }).catch( (err) => {
            alert(err)
        });
    }, [categoryItem]);

    return (
        <Row className='gx-4 gx-lg-5 justify-content-center' id="productos" xs={2} md={3} xl={4}>
             {loading ? <div className='text-center'><Spinner animation="grow" variant="dark" size="sm" /> <Spinner animation="grow" variant="dark" /> <Spinner animation="grow" variant="dark" size="sm" /></div> : productos.map( (p, index) => ( <Item key={'producto_'+index} item={p} url={categoryItem} /> ) )
            }
        </Row>       
    );
};

export default ItemList