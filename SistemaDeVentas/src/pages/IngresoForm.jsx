import React, {useState}  from 'react'
import '../styles/IngresoForm.css'


function IngresoForm({Ingreso}) {
    const [detalles, setDetalles] = useState({correo:""});
    const gestorEnvio = e =>{
        e.preventDefault();
        
    }
    return (
       
        <form onSubmit = {gestorEnvio} className="form--inicio form__entrada-grupo">
            <div className="form-interior"> 
                <h2 className= "form__titulo">Ingreso</h2>
                {/* ERROR!*/}

                <div className="form-grupo">
                        <label htmlFor="correo">Correo:</label>
                        <input type="email" name="correo" id="correo" onChange={e =>setDetalles({...detalles, correo: e.target.value})} value = {detalles.correo}/>
                </div>

                <input type="submit" value="Ingresar" className="envio" onClick={() => { alert(`Correo: ${detalles.correo}`);}}/>
            </div>
        </form>
        
    )
}

export default IngresoForm
