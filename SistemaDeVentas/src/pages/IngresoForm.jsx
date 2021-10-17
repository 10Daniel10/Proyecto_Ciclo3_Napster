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
                    <button className="envio" onClick={() => loginWithRedirect()}>
                        INICIAR SESIÓN CON AUTH0
                    </button>
                    <button className="envio" onClick={() => logout({ returnTo: window.location.origin })}>
                        CERRAR SESIÓN
                    </button>
                </div>
            </form>
            <div className='foot'>
                <Link to='/registro_producto'>
                    <button className="button mainButton">Módulo de Registro de Productos</button>
                </Link>
                <Link to='/registro_venta'>
                    <button className="button mainButton">Módulo de Registro de Ventas</button>
                </Link>
                <Link to='/registro_usuario'>
                    <button className="button mainButton">Módulo de Registro de Usuarios</button>
                </Link>
                <Link to='/gestion_productos'>
                    <button className="button mainButton">Módulo de Gestión de Productos</button>
                </Link>
                <Link to='gestion_ventas'>
                    <button className="button mainButton">Módulo de Gestión de Ventas</button>
                </Link>
                <Link to='/gestion_usuarios'>
                    <button className="button mainButton">Módulo de Gestion de Usuarios</button>
                </Link>
            </div>
        </div>
    )
}

export default IngresoForm;
