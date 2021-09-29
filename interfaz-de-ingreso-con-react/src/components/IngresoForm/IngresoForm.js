import React, {useState}  from 'react'

function IngresoForm({Ingreso, error}) {
    const [detalles, setDetalles] = useState({nombre: "", correo:"", contraseña: ""});
    const gestorEnvio = e =>{
        e.preventDefault();
        Ingreso(detalles);
    }
    return (
        <form onSubmit = {gestorEnvio}>
            <div className="form-interior"> 
                <h2>Ingreso</h2>
                {/* ERROR!*/}
                <div className="form-gurpo">
                    <label htmlFor="nombre">Nombre:</label>
                    <input type="text" name="nombre" id="nombre" onChange={e =>setDetalles({...detalles, nombre: e.target.value})} value = {detalles.nombre}/>
                </div>
                <div className="form-grupo">
                        <label htmlFor="correo">Correo:</label>
                        <input type="email" name="correo" id="correo" onChange={e =>setDetalles({...detalles, correo: e.target.value})} value = {detalles.correo}/>
                </div>
                <div className="form-grupo">
                        <label htmlFor="contraseña">Contraseña</label>
                        <input type="password" name="contraseña" id="contraseña" onChange={e =>setDetalles({...detalles, contraseña: e.target.value})} value = {detalles.contraseña}/>
                </div>
                <input type="submit" value="Ingresar" onClick={() => { alert(`Nombre: ${detalles.nombre} \n Correo: ${detalles.correo} \n Contraseña: ${detalles.contraseña} \n Datos provisionales para ingreso:\n Nombre : administrador\n Correo : administrador@adiministrador.admin\n Contrasena: administrador1234`);}}/>
            </div>
        </form>
    )
}

export default IngresoForm
