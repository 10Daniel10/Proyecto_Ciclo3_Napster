import React, {useState, useEffect} from 'react';
import 'styles/style.css';
import { Link } from 'react-router-dom';
import { obtenerVentas } from 'utils/api';
import DataBaseSale from 'components/comSale';

const GestionSale = () => {
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