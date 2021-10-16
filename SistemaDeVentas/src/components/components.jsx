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
      <tbody>
         {usuarios.map((el) => {
            return (
               <tr>
                  <FilaUsuario 
                     key={nanoid()}
                     usuario = {el}
                  />
               </tr>
            );
         })}
      </tbody>
   )
};

const FilaUsuario = ({usuario}) => {
   const [openDialog, setOpenDialog] = useState(false);
   const [edit, setEdit] = useState(false);
   const [infoNuevoUsuario, setInfoNuevoUsuario] = useState({
      _id: usuario._id,
      name: usuario.name,
      lastname: usuario.brand,
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
            toast.success('vehículo eliminado con éxito');
         },
         (error) => {
            console.error(error);
            toast.error('Error eliminando el vehículo');
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
                     className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                     type='text'
                     value={infoNuevoUsuario.name}
                     onChange={(e) => setInfoNuevoUsuario({ ...infoNuevoUsuario, name: e.target.value })}
                  />
               </td>
               <td>
                  <input
                     className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                     type='text'
                     value={infoNuevoUsuario.lastname}
                     onChange={(e) =>
                        setInfoNuevoUsuario({ ...infoNuevoUsuario, lastname: e.target.value })
                     }
                  />
               </td>
               <td>
                  <input
                     className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
                     type='text'
                     value={infoNuevoUsuario.email}
                     onChange={(e) =>
                        setInfoNuevoUsuario({ ...infoNuevoUsuario, email: e.target.value })
                     }
                  />
               </td>
               <td>
                  <input
                     className=''
                     type='text'
                     value={infoNuevoUsuario.type}
                     onChange={(e) =>
                        setInfoNuevoUsuario({ ...infoNuevoUsuario, type: e.target.value })
                     }
                  />
               </td>
               <td>
                  <input
                     className='bg-gray-50 border border-gray-600 p-2 rounded-lg m-2'
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
            <div className='flex w-full justify-around'>
               {edit ? (
                  <>
                     <Tooltip title='Confirmar Edición' arrow>
                        <i
                           onClick={() => actualizarUsuario()}
                           className='fas fa-check text-green-700 hover:text-green-500'
                        />
                     </Tooltip>
                     <Tooltip title='Cancelar edición' arrow>
                        <i
                           onClick={() => setEdit(!edit)}
                           className='fas fa-ban text-yellow-700 hover:text-yellow-500'
                        />
                     </Tooltip>
                  </>
               ) : (
               <>
                  <Tooltip title='Editar Vehículo' arrow>
                     <i
                        onClick={() => setEdit(!edit)}
                        className='fas fa-pencil-alt text-yellow-700 hover:text-yellow-500'
                     />
                  </Tooltip>
                  <Tooltip title='Eliminar Vehículo' arrow>
                     <i
                        onClick={() => setOpenDialog(true)}
                        className='fas fa-trash text-red-700 hover:text-red-500'
                     />
                  </Tooltip>
               </>
            )}
            </div>
            <Dialog open={openDialog}>
               <div className='p-8 flex flex-col'>
                  <h1 className='text-gray-900 text-2xl font-bold'>
                     ¿Está seguro de querer eliminar el vehículo?
                  </h1>
                  <div className='flex w-full items-center justify-center my-4'>
                     <button
                        onClick={() => deleteUser()}
                        className='mx-2 px-4 py-2 bg-green-500 text-white hover:bg-green-700 rounded-md shadow-md'
                     >
                        Sí
                     </button>
                     <button
                        onClick={() => setOpenDialog(false)}
                        className='mx-2 px-4 py-2 bg-red-500 text-white hover:bg-red-700 rounded-md shadow-md'
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