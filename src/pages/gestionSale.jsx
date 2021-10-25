import React, {useState, useEffect} from 'react';
import DataBaseSale from 'components/comSale';
import { useAuth0 } from "@auth0/auth0-react";
import { obtenerVentas } from 'utils/api';
import { Link } from 'react-router-dom';
import 'styles/style.css';

const GestionSale = () => {
   
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
                     <div id="blockTitle">Gestión de Ventas</div><br></br>
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
                           <Link to='/gestion_usuarios'>
                              <button className="button mainButton">Usuarios</button>
                           </Link>
                        </li><br></br>
                        <li>
                           <Link to='/gestion_productos'>
                              <button className="button mainButton">Productos</button>
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
                        <div>
                           <Link to="/registro_venta">
                              <button className="secondaryButton">Registrar Nueva Venta</button>
                           </Link>
                        </div>
                     </div>
                     <div className="dataBaseContent">
                        <Venta />
                     </div>
                  </div>
               </div>
            </form>
            <section></section>
         </main>
      </div>
   )
}

const Venta = () => {
   const [ventas, setVentas] = useState([]);
   const [ejecutarConsulta, setEjecutarConsulta] = useState([]);

   useEffect(() => {
      console.log('consulta', ejecutarConsulta);
      if (ejecutarConsulta) {
         obtenerVentas(
            (response) => {
               console.log('La respuesta que se recibio fue:', response);
               setVentas(response.data);
            },
            (error) => {
               console.error('Salio un error:', error);
            }
         );
         setEjecutarConsulta(true);
      }
   }, [ejecutarConsulta]);

   return (
      <TablaVentas listaVentas = {ventas} setEjecutarConsulta = {setEjecutarConsulta}/>
   )
}

const TablaVentas = ({listaVentas}) => {
   const [busqueda, setBusqueda] = useState('');
   const [ventasFiltrados, setVentasFiltrados] = useState(listaVentas);

   useEffect(() => {
      setVentasFiltrados(
         listaVentas.filter((elemento) => {
            return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
         })
      );
   }, [busqueda, listaVentas]);

   return <DataBaseSale />
};

export default GestionSale;