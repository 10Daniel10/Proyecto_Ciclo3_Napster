import React, { useEffect, useState } from 'react'
import { obtenerUsuarios } from 'utils/api';
import { Link } from 'react-router-dom';
import 'styles/style.css';
import DataBaseUser from 'components/components';

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
                     <Usuarios />
                  </div>
               </div>
               </div>
         </form>
         <section></section>
         </main>
      </div>
   )
}

const Usuarios = () => {
   const [usuarios, setUsuarios] = useState([]);
   const [ejecutarConsulta, setEjecutarConsulta] = useState([]);

   useEffect(() => {
      console.log('consulta', ejecutarConsulta);
      if (ejecutarConsulta) {
         obtenerUsuarios(
            (response) => {
               console.log('La respuesta que se recibio fue:', response);
               setUsuarios(response.data);
            },
            (error) => {
               console.error('Salio un error:', error);
            }
         );
         setEjecutarConsulta(true);
      }
   }, [ejecutarConsulta]);

   return (
      <TablaUsuarios listaUsuarios = {usuarios} setEjecutarConsulta = {setEjecutarConsulta}/>
   )
}

const TablaUsuarios = ({listaUsuarios}) => {
   const [busqueda, setBusqueda] = useState('');
   const [usuariosFiltrados, setUsuariosFiltrados] = useState(listaUsuarios);

   useEffect(() => {
      setUsuariosFiltrados(
         listaUsuarios.filter((elemento) => {
            return JSON.stringify(elemento).toLowerCase().includes(busqueda.toLowerCase());
         })
      );
   }, [busqueda, listaUsuarios]);

   return (
      <>
         <table className='tabla'>
            <thead>
               <tr>
                  <td>ID</td>
                  <td>Nombre y Apellido</td>
                  <td>Correo Electrónico</td>
                  <td>Tipo de Usuario</td>
                  <td>Estado Usuario</td>
                  <td>Acciones</td>
               </tr>
            </thead>
            <DataBaseUser />
         </table>
      </>
   )
}

export default GestionUser;