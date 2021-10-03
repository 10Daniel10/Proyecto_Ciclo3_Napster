import React from 'react'
import DataBase from 'components/components';

const GestionProd = () => {
   return (
      <div>
         <header className="cabecera">
            <div className="contenedor2">
               <ul className="navbar">
                  <li>
                     <button className="button mainButton">Menú Principal</button>
                  </li>
                  <li>
                     <button className="button mainButton">Productos</button>
                  </li>
                  <li>
                     <button className="button mainButton">Carrito</button>
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
                           &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; Apellidos: &nbsp;
                           <input placeholder="Ramírez" type="text" className="textBox"/>
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
                           <button className="button secondaryButton">Añadir</button>
                        </li>
                        </ul>
                     </div>
                     <div className="dataBaseContent">
                        <ul className="dataBaseTitle">
                           <li><input type="checkbox"/></li>
                           <li>Nombre</li>
                           <li>Usuario</li>
                           <li>Tipo de Usuario</li>
                           <li>Correo Electrónico</li>
                           <li>Fecha de Registro</li>
                           <li>Estado Usuario</li>
                           <li>Acciones</li>
                        </ul>
                        <DataBase
                           name="David"
                           user="DavidRamirez20"
                           userType="Administrador"
                           email="alejoramirezrios@gmial.com"
                           date="09 / 09 / 2021"
                        />
                        <DataBase
                           name="Valentina"
                           user="ValeSa2021"
                           userType="Vendedor"
                           email="vsanabria@gmail.com"
                           date="31 / 01 / 2021"
                        />
                        <DataBase
                           name="Andrés"
                           user="AndresLop2021"
                           userType="Vendedor"
                           email="andreslop@gmial.com"
                           date="17 / 06 / 2021"
                        />
                        <DataBase
                           name="Óscar"
                           user="OscarApo2021"
                           userType="Usuario"
                           email="oscapo@gmail.com"
                           date="24 / 09 / 2021"
                        />
                        <DataBase
                           name="Diana"
                           user="DianaRs2021"
                           userType="Usuario"
                           email="dimar@gmail.com"
                           date="10 / 10 / 2021"
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

export default GestionProd;
