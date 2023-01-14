
import { NavLink } from 'react-router-dom';

export default function MenuItem ({ producto }) {
    return (
        <NavLink to={`./productos/${producto.toLowerCase()}`} className="dropdown-item">
            {producto.replace(/(-)/gm, ' ')}
        </NavLink>  
    );
};