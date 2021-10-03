import React from 'react'
import DataBaseUser from 'components/components'
import 'styles/style.css';
import { Link } from 'react-router-dom';

const GestionUser = () => {
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
                  <Link to='/gestion_productos'>
                     <button className="button mainButton">Productos</button>
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
                  Gestión de Usuarios/Roles
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
                  <span>Cédula</span><br></br><br></br>
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
                  <span>Telefóno</span><br></br><br></br>
                  <li>
                     <select className="widthSelect">
                     <option></option>
                     <option>300</option>
                     <option>301</option>
                     </select>
                  </li><br></br>
                  <span>Tipo de Usuario</span><br></br><br></br>
                  <li>
                     <select className="widthSelect">
                        <option></option>
                        <option>Administrador</option>
                        <option>Vendedor</option>
                        <option>Usuario</option>
                     </select>
                  </li>
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
                        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;Nombre:&nbsp;
                        <input placeholder="David" type="text" className="textBox"/>
                     </li><br></br>
                     <li>
                        Correo electrónico:&nbsp;
                        <input placeholder="udea@edu.co" type="email" className="textBox"/>
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
                        &nbsp; Estado Usuario: &nbsp;&nbsp; 
                        <select id="widthSelectOne">
                           <option></option>
                           <option>Pendiente</option>
                           <option>Autorizado</option>
                           <option>No Autorizado</option>
                        </select>
                     </li><br></br>
                     <li>
                        <button className="button secondaryButton">Buscar</button>
                     </li>
                     </ul>
                  </div>
                  <div className="dataBaseContent">
                     <table>
                        <thead>
                           <tr className="dataBaseTitle">
                              <td><input type="checkbox"/></td>
                              <td>Nombre</td>
                              <td>Usuario</td>
                              <td>Tipo de Usuario</td>
                              <td>Correo Electrónico</td>
                              <td>Estado Usuario</td>
                              <td>Acciones</td>
                           </tr>
                        </thead>
                     </table>
                     <DataBaseUser
                        name="Alejandro"
                        user="AlejRamirez20"
                        userType="Administrador"
                        email="alejoramir@gmial.com"
                        state="No autorizado"
                     />
                     <DataBaseUser
                        name="Valentina"
                        user="ValeSa2021"
                        userType="Vendedor"
                        email="vsanabria@gmail.com"
                        state="Pendiente"
                     />
                     <DataBaseUser
                        name="Andrés"
                        user="AndresLop2021"
                        userType="Vendedor"
                        email="andreslop@gmial.com"
                        state="Autorizado"
                     />
                     <DataBaseUser
                        name="Fernando"
                        user="FernApo2021"
                        userType="Usuario"
                        email="fernapo@gmail.com"
                        state="No autorizado"
                     />
                     <DataBaseUser
                        name="Diana"
                        user="DianaRs2021"
                        userType="Usuario"
                        email="dimar@gmail.com"
                        state="Autorizado"
                     />
                  </div>
               </div>
               </div>
         </form>
         <section></section>
         </main>
      </div>
   )
}

export default GestionUser;