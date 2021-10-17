import '../styles/App.css';
import '../Media/Background.jpg';
import { Link } from 'react-router-dom';
import { crearUsuario } from 'utils/api';
import React, {useRef} from 'react';
import { toast } from 'react-toastify';

const RegUsuario = () => {

   const form = useRef(null);

   const SubmitForm = async (e) => {
      e.preventDefault();
      const fd = new FormData(form.current);
   
      const nuevoUsuario = {};
         fd.forEach((value, key) => {
            nuevoUsuario[key] = value;
      });

      await crearUsuario(
         {
           name: nuevoUsuario.name,
           lastname: nuevoUsuario.lastname,
           email: nuevoUsuario.email,
           type: nuevoUsuario.type,
           state: nuevoUsuario.state
         },
         (response) => {
           console.log(response.data);
           toast.success('Usuario agregado con éxito');
         },
         (error) => {
           console.error(error);
           toast.error('Error creando un usuario');
         }
      );
      //setMostrarTabla(true);
   }
   
   return (
      <div className="App2">
         <header>
            <br></br>
            <h1 className="TituloH1">MÓDULO ADMINISTRADOR USUARIOS</h1> 
         </header>
         <div className="BodyReg form-register">
            <form ref={form} onSubmit={SubmitForm} >
               <h4>Ingrese usuario</h4>
               <label htmlFor='name'>
                  <input className="controls" type="text" name="name" placeholder="Nombre" required/>
               </label>
               <label htmlFor='lastname'>
                  <input className="controls" type="text" name="lastname" placeholder="Apellido"></input>
               </label>
               <label htmlFor='email'>
                  <input className="controls" type="email" name="email" placeholder="Correo"></input>
               </label>
               <label className="controls2">Tipo:</label><br></br><br></br>
               <label htmlFor='type'>
                  <input className="radiob" type="radio" name="type" value="Administrador"/> Administrador
                  <input className="radiob" type="radio" name="type" value="Vendedor"/> Vendedor
               </label><br></br><br></br>
               <label className="controls2">Estado:</label><br></br><br></br>
               <label htmlFor='state'>
                  <input className="radiob" type="radio" name="state" value="Autorizado"/> Autorizado
                  <input className="radiob" type="radio" name="state" value="No Autorizado"/> No autorizado
                  <input className="radiob" type="radio" name="state" value="Pendiente"/> Pendiente
               </label>
               
               <button className="botons" type="submit" >Registar Usuario</button>
               <button className="botons" type="reset" >Limpiar Campos</button>
               
               <Link to='/'>Volver</Link>
            </form>
         </div>
      </div>
   )
}
export default RegUsuario;