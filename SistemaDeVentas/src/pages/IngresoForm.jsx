import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";
import '../styles/IngresoForm.css'

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
        </div>
    )
}

export default IngresoForm;
