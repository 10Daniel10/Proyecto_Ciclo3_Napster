import React from 'react';
import 'styles/style.css';
import { Link } from 'react-router-dom';

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
                     <div id="contentul3">
                        <ul className="lista">
                           <li>
                           &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;ID Venta:&nbsp;
                              <input placeholder="DavidRamirez20" type="text" className="textBox"/>
                           </li><br></br>
                           <li>
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;ID Producto:&nbsp;
                              <input placeholder="David" type="text" className="textBox"/>
                           </li><br></br>
                           <li>
                              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; ID Usuario &nbsp;
                              <input placeholder="Ramírez" type="text" className="textBox"/>
                           </li><br></br>
                           <li>
                              <button className="button thirdButton">Buscar</button>
                           </li>
                        </ul>
                     </div>
                     <div className="dataBaseContent">
                        <ul className="dataBaseTitle">
                           <li><input type="checkbox"/></li>
                           <li>ID Venta</li>
                           <li>ID Producto</li>
                           <li>Cantidad</li>
                           <li>Valor Unitario</li>
                           <li>Fecha de Venta</li>
                           <li>ID Usuario</li>
                           <li>Valor Total</li>
                        </ul>
                     </div>
                  </div>
               </div>
            </form>
            <section></section>
         </main>
      </div>
   )
}

export default GestionSale;
