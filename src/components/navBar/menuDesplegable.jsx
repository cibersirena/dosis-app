import { NavLink } from 'react-router-dom';

export default function MenuDesplegable({ categoria }) {
    return (
        <>
            {categoria.map((p, index) => (
                <NavLink to={`./productos/${p.toLowerCase()}`} className="dropdown-item" key={'categoria_'+index}>
                {p.replace(/(-)/gm, ' ')}
                </NavLink>  
            ))}
        </>
    )
};