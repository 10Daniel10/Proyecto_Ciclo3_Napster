import React, {useState, useEffect} from 'react';
import DataBaseProduct from 'components/comProd';
import { useAuth0 } from "@auth0/auth0-react";
import { obtenerProductos } from 'utils/api';
import { Link } from 'react-router-dom';
import 'styles/style.css';

const GestionProd = () => {

   const { user, isAuthenticated} = useAuth0();
   const { logout } = useAuth0();

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
                     <div id="blockTitle">Gestión de Productos</div><br></br>
                     <ul className="sidebar">
                        <span id="filter"></span><br></br>
                        <li>
                           {isAuthenticated && (
                              <div>
                                 <span>{user.name}</span><br></br>
                                 <span>{user.email}</span>
                              </div>
                           )}
                        </li><br></br>
                        <li>
                           <Link to='/'>
                              <i className="fas fa-sign-out-alt"></i>
                              <button className="button2" onClick={() => logout({ returnTo: window.location.origin })}>Cerrar Sesión</button>
                           </Link>
                        </li><br></br>
                        <span id="filter"></span><br></br>
                        <li>
                           <Link to='/'>
                              <button className="button mainButton">Menú Principal</button>
                           </Link>
                        </li><br></br>
                        <li>
                           <Link to='/gestion_usuarios'>
                              <button className="button mainButton">Usuarios</button>
                           </Link>
                        </li><br></br>
                        <li>
                           <Link to='/gestion_ventas'>
                              <button className="button mainButton">Ventas</button>
                           </Link>
                        </li><br></br>
                        <span id="filter"></span>
                     </ul> 
                  </div>
                  <div id="inner-grid">
                     <div id="contentUl1">
                        <div>
                           <Link to="/registro_producto">
                              <button className="secondaryButton">Registrar Nuevo Producto</button>
                           </Link>
                        </div>
                     </div>
                     <div className="dataBaseContent">
                        <Productos />
                     </div>
                  </div>
               </div>
            </form>
         </main>
      </div>
   )
}

const Productos = () => {
   const [productos, setProductos] = useState([]);
   const [ejecutarConsulta, setEjecutarConsulta] = useState([]);

   useEffect(() => {
      console.log('consulta', ejecutarConsulta);
      if (ejecutarConsulta) {
         obtenerProductos(
            (response) => {
               console.log('La respuesta que se recibio fue:', response);
               setProductos(response.data);
            },
            (error) => {
               console.error('Salio un error:', error);
            }
         );
         setEjecutarConsulta(true);
      }
   }, [ejecutarConsulta]);

   return (
      <TablaProductos listaProductos = {productos} setEjecutarConsulta = {setEjecutarConsulta}/>
   )
}

const TablaProductos = ({listaProductos}) => {
   const [busqueda, setBusqueda] = useState('');
   const [ProductosFiltrados, setProductosFiltrados] = useState(listaProductos);

   useEffect(() => {
      setProductosFiltrados(
         listaProductos.filter((elemento) => {
            return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
         })
      );
   }, [busqueda, listaProductos]);

   return <DataBaseProduct />
};

export default GestionProd;