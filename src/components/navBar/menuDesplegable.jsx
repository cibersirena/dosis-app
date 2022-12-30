import { dataProductos } from '../productos';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Menu({ producto }) {
    return (
        <NavDropdown.Item href="#">{producto}</NavDropdown.Item>
    );
};

function Desplegable() {
    dataProductos.sort((a, b) => a.tipo.localeCompare(b.tipo));
    const productosItems = [];
    dataProductos.forEach((p) => {
        productosItems.push(p.item);
    });

    let unicosItems = new Set(productosItems);
    const menuDesplegable = [];
    unicosItems.forEach((p) => {
        menuDesplegable.push(p);
    });

    return (
        <>
            {menuDesplegable.map((p) => (
                <Menu key={p} producto={p} />
            ))}
        </>
    )
};

export default Desplegable;