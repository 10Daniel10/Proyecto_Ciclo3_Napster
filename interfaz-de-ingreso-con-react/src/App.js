import React, {useState} from "react";
import IngresoForm from "./components/IngresoForm/IngresoForm";
function App() {
  const adminUsuario = {
    usuarioNombre : "administrador",
    usuarioCorreo : "administrador@adiministrador.admin",
    usuarioContrasena: "administrador1234"
  }

  const [usuario, setUsuario] = useState({nombre: "", correo : ""});
  const [error, setError] = useState("");

  const Ingreso = detalles => {
    console.log(detalles);
    if (detalles.correo == adminUsuario.usuarioCorreo && detalles.contraseña == adminUsuario.usuarioContrasena)
    console.log ("Inició sesión");
    else{
      console.log ("Usuario y contraseña incorrectos! para probar la aplicación use Nombre : administrador, usuarioCorreo : administrador@adiministrador.admin usuarioContrasena: administrador1234");
    }
 
  }

  const Salir = () =>{
    console.log("Salir");
  }
 
 
 
  return (
    <div className="contenedor">
    {(usuario.correo != "") ? (
      <div className="bienvenido">
        <h2>Bienvenido! <span>{usuario.nombre}</span></h2>
        <button>Salir</button>
      </div>
    ) : (
        <IngresoForm Ingreso = {Ingreso} error = {error}/>
    )}
    </div>
  )
};

export default App;

