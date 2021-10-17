import React, {useState, useEffect} from 'react';
import {eliminarUsuario, editarUsuario} from 'utils/api.js'
import { Dialog, Tooltip } from '@mui/material';
import { obtenerUsuarios } from 'utils/api';
import { toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import 'styles/style.css';


const DataBaseUser = () => {

   const [usuarios, setUsuarios] = useState([]);

   useEffect(() => {
      const fetchUsuarios = async () => {
         await obtenerUsuarios(
            (response) => {
               setUsuarios(response.data);      
            }, 
            (error) => {
               console.error(error);
            }
         );
      };
      fetchUsuarios();   
   }, [setUsuarios]);

   return (
      <table className='tabla'>
         <thead>
            <tr>
               <td>ID</td>
               <td>Nombre</td>
               <td>Apellido</td>
               <td>Correo Electrónico</td>
               <td>Tipo de Usuario</td>
               <td>Estado Usuario</td>
               <td>Acciones</td>
            </tr>
         </thead>
         <tbody>
            {usuarios.map((el) => {
               return (
                  <FilaUsuario 
                     key={nanoid()}
                     usuario = {el}
                  />
               );
            })}
         </tbody>
      </table>
   )
};

const FilaUsuario = ({usuario}) => {
   const [openDialog, setOpenDialog] = useState(false);
   const [edit, setEdit] = useState(false);
   const [infoNuevoUsuario, setInfoNuevoUsuario] = useState({
      _id: usuario._id,
      name: usuario.name,
      lastname: usuario.lastname,
      email: usuario.model,
      type: usuario.type,
      state: usuario.state
   });

   const actualizarUsuario = async () => {
      //enviar la info al backend
      await editarUsuario(
         usuario._id,
         {
            name: infoNuevoUsuario.name,
            lastname: infoNuevoUsuario.lastname,
            email: infoNuevoUsuario.email,
            type: infoNuevoUsuario.type,
            state: infoNuevoUsuario.state
         },
         (response) => {
            console.log(response.data);
            toast.success('Vehículo modificado con éxito');
            setEdit(false);
         },
         (error) => {
            toast.error('Error modificando el vehículo');
            console.error(error);
         }
      );
   };
   
   const deleteUser = async () => {
      await eliminarUsuario(
         usuario._id,
         (response) => {
            console.log(response.data);
            toast.success('Usuario eliminado con éxito');
         },
         (error) => {
            console.error(error);
            toast.error('Error eliminando el usuario');
         }
      );
      setOpenDialog(false);
   };

   return (
      <tr>
         {edit ? (
            <>
               <td>{infoNuevoUsuario._id}</td>
               <td>
                  <input
                     className='textBox'
                     type='text'
                     value={infoNuevoUsuario.name}
                     onChange={(e) => setInfoNuevoUsuario({ ...infoNuevoUsuario, name: e.target.value })}
                  />
               </td>
               <td>
                  <input
                     className='textBox'
                     type='text'
                     value={infoNuevoUsuario.lastname}
                     onChange={(e) =>
                        setInfoNuevoUsuario({ ...infoNuevoUsuario, lastname: e.target.value })
                     }
                  />
               </td>
               <td>
                  <input
                     className='textBox'
                     type='text'
                     value={infoNuevoUsuario.email}
                     onChange={(e) =>
                        setInfoNuevoUsuario({ ...infoNuevoUsuario, email: e.target.value })
                     }
                  />
               </td>
               <td>
                  <input
                     className='textBox'
                     type='text'
                     value={infoNuevoUsuario.type}
                     onChange={(e) =>
                        setInfoNuevoUsuario({ ...infoNuevoUsuario, type: e.target.value })
                     }
                  />
               </td>
               <td>
                  <input
                     className='textBox'
                     type='text'
                     value={infoNuevoUsuario.state}
                     onChange={(e) =>
                        setInfoNuevoUsuario({ ...infoNuevoUsuario, state: e.target.value })
                     }
                  />
               </td>
            </>
         ) : (
            <>
               <td>{usuario._id.slice(20)}</td>
               <td>{usuario.name}</td>
               <td>{usuario.lastname}</td>
               <td>{usuario.email}</td>
               <td>{usuario.type}</td>
               <td>{usuario.state}</td>
            </>
         )}
         <td>
            <div className='actions'>
               {edit ? (
                  <>
                     <Tooltip title='Confirmar Edición' arrow>
                        <i
                           onClick={() => actualizarUsuario()}
                           className='fas fa-check iconConf'
                        />
                     </Tooltip>
                     <Tooltip title='Cancelar edición' arrow>
                        <i
                           onClick={() => setEdit(!edit)}
                           className='fas fa-ban iconCancel'
                        />
                     </Tooltip>
                  </>
               ) : (
               <>
                  <Tooltip title='Editar Usuario' arrow>
                     <i
                        onClick={() => setEdit(!edit)}
                        className='fas fa-pencil-alt iconEdit'
                     />
                  </Tooltip>
                  <Tooltip title='Eliminar Usuario' arrow>
                     <i
                        onClick={() => setOpenDialog(true)}
                        className='fas fa-trash iconDelete'
                     />
                  </Tooltip>
               </>
            )}
            </div>
            <Dialog open={openDialog}>
               <div className='dialogChart'>
                  <h1 className='dialogTitle'>
                     ¿Está seguro de querer eliminar el usuario?
                  </h1>
                  <div className='dialogButton'>
                     <button
                        onClick={() => deleteUser()}
                        className='dialogYes'
                     >
                        Sí
                     </button>
                     <button
                        onClick={() => setOpenDialog(false)}
                        className='dialogNo'
                     >
                        No
                     </button>
                  </div>
               </div>
            </Dialog>
         </td>
      </tr>
   );
};

export default DataBaseUser;