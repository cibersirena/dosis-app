
import { NavLink } from 'react-router-dom';

export default function MenuItem ({ producto }) {
    return (
        <NavLink to={`./productos/${producto.toLowerCase().replace(/\s+/g, '')}`} className="dropdown-item">
            {producto}
        </NavLink>  
    );
};