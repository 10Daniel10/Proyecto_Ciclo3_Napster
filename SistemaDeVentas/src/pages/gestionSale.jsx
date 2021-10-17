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
               <ul className="navbar">
                  <li>
                     <Link to='/'>
                        <button className="button mainButton">Menú Principal</button>
                     </Link>
                  </li>
                  <li>
                     <Link to='/gestion_datos'>
                        <button className="button mainButton">Usuarios</button>
                     </Link>
                  </li>
                  <li>
                     <Link to='/gestion_productos'>
                        <button className="button mainButton">Productos</button>
                     </Link>
                  </li>
                  <li>
                     <div className="buscar">
                        <input placeholder="Buscar"/>
                        <i className="fas fa-search button iconoBuscar"></i>                    
                     </div>
                  </li>
               </ul>    
            </div>
         </header>      
         <main>
            <form>
               <div id="outer-grid">
                  <div id="columnOne">
                  <br></br>
                  <div id="blockTitle">
                     Gestión de Ventas
                  </div><br></br>
                  <span id="filter">Filtrar</span><br></br>
                  <ul className="lista">
                     <span>Nombre</span><br></br><br></br>
                     <li>
                        <select className="widthSelect">
                        <option></option>
                        <option>A - Z</option>
                        <option>Z - A</option>
                        </select>
                     </li><br></br>
                     <span>Identificador</span><br></br><br></br>
                     <li>
                        <select className="widthSelect">
                        <option></option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                        </select>
                     </li><br></br>
                     <span>Responsable</span><br></br><br></br>
                     <li>
                        <select className="widthSelect">
                        <option></option>
                        <option>300</option>
                        <option>301</option>
                        </select>
                     </li><br></br>
                  </ul>
                  </div>
                  <div id="inner-grid">
                     <div id="contentUl1">
                        <ul className="lista">
                        <li>
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;Producto:&nbsp;
                           <input placeholder="Manzana" type="text" className="textBox"/>
                        </li><br></br>
                        <li>
                           &nbsp; &nbsp;&nbsp;Nombre Usuario:&nbsp;
                           <input placeholder="David" type="text" className="textBox"/>
                        </li><br></br>
                        <li>
                           Nombre Vendedor:&nbsp;
                           <input placeholder="Daniel" type="email" className="textBox"/>
                        </li><br></br>
                        </ul>
                     </div>
                     <div id="contentUl2">
                        <ul className="lista">
                        <li>
                           &nbsp; Estado Venta: &nbsp;&nbsp; 
                           <select id="widthSelectOne">
                              <option></option>
                              <option>En Proceso</option>
                              <option>Entregado</option>
                              <option>Cancelado</option>
                           </select>
                        </li><br></br>
                        <li>
                           <button className="button secondaryButton">Buscar</button>
                        </li>
                        </ul>
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