import React, { useEffect, useState } from 'react'
import DataBaseUser from 'components/comUser';
import { useAuth0 } from "@auth0/auth0-react";
import { obtenerUsuarios } from 'utils/api';
import { Link } from 'react-router-dom';
import 'styles/style.css';

const GestionUser = () => {

   const { user, isAuthenticated } = useAuth0();
   const { logout } = useAuth0();

   const cerrarSesion = () => {
      logout({ returnTo: window.location.origin });
      localStorage.setItem('token', null);
   }

   return (
      <div>
         <header className="cabecera">
            <div className="contenedor2">
            </div>
         </header>      
         <main>
         <form>
            <div id="outer-grid">
               <div id="columnOne"><br></br>
                  <div id="blockTitle">Gestión de Usuarios</div><br></br>
                  <ul className="sidebar">
                     <span id="filter"></span><br></br>
                     <li>
                        {isAuthenticated && (
                           <div>
                              <img src={user.picture} className='picUser'></img><br></br>
                              <h3>{user.name}</h3>
                              <span>{user.email}</span>
                           </div>
                        )}
                     </li><br></br>
                     <span id="filter">Navegación</span><br></br>
                     <li>
                        <Link to='/'>
                           <button className="button mainButton">Menú Principal</button>
                        </Link>
                     </li><br></br>
                     <li>
                        <Link to='/gestion_productos'>
                           <button className="button mainButton">Productos</button>
                        </Link>
                     </li><br></br>
                     <li>
                        <Link to='/gestion_ventas'>
                           <button className="button mainButton">Ventas</button>
                        </Link>
                     </li><br></br>
                     <span id="filter"></span><br></br>
                  </ul> 
                  <div>
                     <Link to='/'>
                        <button className="button2" onClick={() => cerrarSesion()}>Cerrar Sesión</button>
                     </Link>
                  </div>
               </div>
               <div id="inner-grid">
                  <div id="contentUl1">
                  </div>
                  <div className="dataBaseContent">
                     <Usuarios />
                  </div>
               </div>
            </div>
         </form>
         <section></section>
         </main>
      </div>
   )
}

const Usuarios = () => {
   const [usuarios, setUsuarios] = useState([]);
   const [ejecutarConsulta, setEjecutarConsulta] = useState([]);

   useEffect(() => {
      console.log('consulta', ejecutarConsulta);
      if (ejecutarConsulta) {
         obtenerUsuarios(
            (response) => {
               console.log('La respuesta que se recibio fue:', response);
               setUsuarios(response.data);
            },
            (error) => {
               console.error('Salio un error:', error);
            }
         );
         setEjecutarConsulta(true);
      }
   }, [ejecutarConsulta]);

   return (
      <TablaUsuarios listaUsuarios = {usuarios} setEjecutarConsulta = {setEjecutarConsulta}/>
   )
}

const TablaUsuarios = ({listaUsuarios}) => {
   const [busqueda, setBusqueda] = useState('');
   const [usuariosFiltrados, setUsuariosFiltrados] = useState(listaUsuarios);

   useEffect(() => {
      setUsuariosFiltrados(
         listaUsuarios.filter((elemento) => {
            return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
         })
      );
   }, [busqueda, listaUsuarios]);

   return <DataBaseUser />
};

export default GestionUser;