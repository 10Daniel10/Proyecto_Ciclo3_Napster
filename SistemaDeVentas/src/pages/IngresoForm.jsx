import React from 'react'
import '../styles/IngresoForm.css'
import { Link } from 'react-router-dom';
import { useAuth0 } from "@auth0/auth0-react";

function IngresoForm({Ingreso}) {
    const gestorEnvio = e =>{
        e.preventDefault();
        
    }
    const { loginWithRedirect } = useAuth0();
    const { logout } = useAuth0();
    return (
        <div >
            <form onSubmit = {gestorEnvio} className="form--inicio form__entrada-grupo">
                <div className="form-interior"> 
                    <h2 className= "form__titulo">Ingreso</h2>
                    {/* ERROR!*/}

                    <button className="envio" onClick={() => loginWithRedirect()}>INICIAR
                        SESIÓN CON AUTH0
                    </button>
                    <button className="envio" onClick={() => logout({ returnTo: window.location.origin })}>
                        CERRAR SESIÓN
                    </button>
                </div>
            </form><br></br>
            <div>
                <Link to='/registro_producto'>
                    <button className="button mainButton">Módulo de registro de productos</button>
                </Link>
                <Link to='/gestion_productos'>
                    <button className="button mainButton">Módulo de gestión deproductos</button>
                </Link>
                <Link to='gestion_ventas'>
                    <button className="button mainButton">Módulo de gestión deventas</button>
                </Link>
                <Link to='/gestion_usuarios'>
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
        </div>
    )
}

export default IngresoForm
