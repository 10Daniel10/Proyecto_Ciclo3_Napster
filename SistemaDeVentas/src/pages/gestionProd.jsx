import React, {useState, useEffect} from 'react';
import DataBaseProduct from 'components/comProd';
import { obtenerProductos } from 'utils/api';
import { Link } from 'react-router-dom';
import 'styles/style.css';

const GestionProd = () => {
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
                     <Link to='/gestion_ventas'>
                        <button className="button mainButton">Ventas</button>
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
                     Gestión de Productos
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
                  </ul>
                  </div>
                  <div id="inner-grid">
                     <div id="contentUl1">
                        <ul className="lista">
                        <li>
                           &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;Descripción:&nbsp;
                           <input placeholder="Manzana" type="text" className="textBox"/>
                        </li><br></br>
                        <li>
                           &nbsp; &nbsp;&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;ID Producto:&nbsp;
                           <input placeholder="C.C" type="number" className="textBox"/>
                        </li><br></br>
                        </ul>
                     </div>
                     <div id="contentUl2">
                        <ul className='lista'>
                           <li>
                           &nbsp; Estado Producto: &nbsp;&nbsp; 
                              <select id="widthSelectOne">
                                 <option></option>
                                 <option>Dispoinble</option>
                                 <option>Pendiente</option>
                                 <option>No Disponible</option>
                              </select>
                           </li><br></br>
                           <li>
                              <button className="button secondaryButton">Buscar</button>
                           </li>
                        </ul>  
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