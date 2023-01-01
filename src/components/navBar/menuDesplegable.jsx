import { dataProductos } from '../productos';
import MenuItem from './menuItem';
import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';

function fetchItems() {
    return new Promise ( (resolve,reject) => {
        setTimeout( ()=> {
            dataProductos ? 
            resolve(dataProductos) : reject("Se produjo un error al cargar los productos")
        }, 2000);   
    });
}

function MenuDesplegable() {

    const [items, setItems] = useState([]);
    const [loadingItems, setLoadingItems] = useState(true);

    useEffect( () => {
        setLoadingItems(true);
        fetchItems().then( (res) => {
            res.sort((a,b) => a.item.localeCompare(b.item));
            const productosItems = [];
            res.forEach((p) => {
                productosItems.push(p.item);
            });
            const unicosItems = new Set(productosItems);
            const menuDesplegable = [];
            unicosItems.forEach((p) => {
                menuDesplegable.push(p);
            });
            setItems(menuDesplegable);
            setLoadingItems(false);
        }).catch( (err) => {
            alert(err)
        });
    }, []);

    return (
        <>
            {loadingItems ? <div className='text-center'><Spinner animation="grow" variant="dark" size="sm" /></div>  : items.map((p, index) => (
                <MenuItem key={"item_"+index} producto={p} />
            ))}
        </>
    )
};

export default MenuDesplegable;