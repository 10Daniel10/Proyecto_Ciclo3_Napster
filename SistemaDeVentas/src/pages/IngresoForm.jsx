import React, {useState}  from 'react'
import '../styles/IngresoForm.css'
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

function IngresoForm({Ingreso}) {
    const { loginWithRedirect } = useAuth0();
    const [detalles, setDetalles] = useState({correo:""});
    const gestorEnvio = e =>{
        e.preventDefault();
        
    }
    return (
       <div className="form--inicio">
        <form onSubmit = {gestorEnvio} className="form--inicio form__entrada-grupo">
            <div className="form-interior"> 
                <h2 className= "form__titulo">Ingreso</h2>
                {/* ERROR!*/}

                <div className="form-grupo">
                        <label htmlFor="correo">Correo:</label>
                        <input type="email" name="correo" id="correo" onChange={e =>setDetalles({...detalles, correo: e.target.value})} value = {detalles.correo}/>
                </div>

                <input type="submit" value="Ingresar" className="envio" onClick={() => { alert(`Correo: ${detalles.correo}`);}}/>
                <button onClick={() => loginWithRedirect()}>Log In</button>;
            </div>
        </form>
        <Link to='/registro_producto'>
            <button className="button mainButton">Módulo de registro de productos</button>
        </Link>
        <Link to='/gestion_productos'>
            <button className="button mainButton">Módulo de gestión deproductos</button>
        </Link>
        <Link to='gestion_ventas'>
            <button className="button mainButton">Módulo de gestión deventas</button>
        </Link>
        <Link to='/gestion_datos'>
            <button className="button mainButton">Módulo de gestion de usuarios y roles</button>
        </Link>
        <Link to='/modificacion_producto'>
            <button className="button mainButton"> Módulo de modificación de productos</button>
        </Link>
        <Link to='/registro_venta'>
            <button className="button mainButton"> Módulo de registro de ventas</button>
        </Link>
        <Link to='/modificacion_venta'>
            <button className="button mainButton">Módulo modificación de ventas </button>
        </Link>
        <Link to='/modificacion_usuario'>
            <button className="button mainButton">Módulo modificación de usurarios </button>
        </Link>
       
        
        </div>
    )
}

export default IngresoForm
