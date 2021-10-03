import React from 'react'
import { Link } from 'react-router-dom';

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
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp;Usuario:&nbsp;
                           <input placeholder="DavidRamirez20" type="text" className="textBox"/>
                        </li><br></br>
                        <li>
                           Correo electrónico:&nbsp;
                           <input placeholder="udea@edu.co" type="email" className="textBox"/>
                        </li><br></br>
                        <li>
                           &nbsp; &nbsp; &nbsp; &nbsp;Identificación: &nbsp;
                           <input placeholder="C.C" type="number" className="textBox"/>
                        </li><br></br>
                        </ul>
                     </div>
                     <div id="contentUl2">
                        <ul className="lista">
                        <li>
                           &nbsp; Tipo de Usuario: &nbsp;  
                           <select id="widthSelectOne">
                              <option></option>
                              <option>Administrador</option>
                              <option>Vendedor</option>
                              <option>Usuario</option>
                           </select>
                        </li><br></br>
                        <li>
                           Estado de Cuenta: &nbsp; 
                           <input placeholder="Ej: 1000000" type="number" className="textBox"/>
                        </li><br></br>
                        <li>
                           &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ID: &nbsp; 
                           <input placeholder="U001" type="text" className="textBox"/>
                        </li><br></br>
                        <li>
                           <button className="button secondaryButton">Buscar</button>
                        </li>
                        </ul>
                     </div>
                     <div className="dataBaseContent">
                        <ul className="dataBaseTitle">
                           <li><input type="checkbox"/></li>
                           <li>ID Producto</li>
                           <li>Descripción</li>
                           <li>Valor unitario</li>
                           <li>Estado</li>
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

export default GestionProd;
