import React from 'react'
import 'styles/style.css';

const EditAccount = () => {
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
               <ul>
                  <span>Nombre</span><br></br><br></br>
                  <li>
                     <select className="widthSelect">
                     <option>1</option>
                     <option>2</option>
                     </select>
                  </li><br></br>

                  <span>Tipo de Usuario</span><br></br><br></br>
                     <li>
                     <select className="widthSelect">
                        <option>1</option>
                        <option>2</option>
                     </select>
                     </li>
               </ul>
               </div>
               <div id="gridStandard">
                  <div id="contentUl3">
                     <ul>
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
                     <ul>
                     <li>
                        &nbsp; Tipo de Usuario: &nbsp;  
                        <select id="widthSelectOne">
                           <option>1</option>
                           <option>2</option>
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
                        <button className="button secondaryButton">Editar</button>
                     </li>
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

export default EditAccount
