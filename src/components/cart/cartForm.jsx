import { useState } from "react";

function CartForm ({ handleCompra }) {

    const [user, setUser] = useState({});
    const datosUser = (event) => {
        setUser({...user,[event.target.name]: event.target.value});
    };

    const manejarUsuario = (event) => {
        event.preventDefault();
        handleCompra(user);
    };

    return (
        <form onSubmit={manejarUsuario}>
            <label id="name-label" className="col-form-label block">Nombre Completo: </label>
            <input type="text" id="name" name="nombre" placeholder="Ingresá tu nombre y apellido" required className="block w-100 mb-2" onChange={datosUser} /> 
            
            <label id="email-label"  className="col-form-label block">Tu email:</label>
            <input type="email" id="email" name="email" placeholder="Ingresá tu email" required className="block w-100 mb-2" onChange={datosUser} />

            <label id="phone-label" className="col-form-label block">Tu teléfono:</label>
            <input type="tel" id="phone" name="telefono" placeholder="código de área + número sin espacios, ejemplo: 1121346789" pattern="[0-9]{10}" required  className="block w-100 mb-2" onChange={datosUser}/>
            
            <button className='outline-dark btn mb-3 mt-3' type="submit">Finalizar compra</button> 
        </form>
    )
};

export default CartForm;