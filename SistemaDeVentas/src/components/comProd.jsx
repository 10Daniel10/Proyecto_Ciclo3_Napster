import React, {useState, useEffect} from 'react';
import {eliminarProducto, editarProducto} from 'utils/api.js'
import { Dialog, Tooltip } from '@mui/material';
import { obtenerProductos } from 'utils/api';
import { toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import 'styles/style.css';

const DataBaseProduct = () => {

   const [productos, setProductos] = useState([]);

   useEffect(() => {
      const fetchProductos = async () => {
         await obtenerProductos(
            (response) => {
               setProductos(response.data);      
            }, 
            (error) => {
               console.error(error);
            }
         );
      };
      fetchProductos();   
   }, [setProductos]);

   return (
      <table className='tabla'>
         <thead>
            <tr>
               <td>ID Producto</td>
               <td>Descripción</td>
               <td>Valor Unitario</td>
               <td>Estado</td>
               <td>Acciones</td>
            </tr>
         </thead>
         <tbody>
            {productos.map((el) => {
               return (
                  <FilaProducto
                     key={nanoid()}
                     producto = {el}
                  />
               );
            })}
         </tbody>
      </table>
   )
};

const FilaProducto= ({producto}) => {
   const [openDialog, setOpenDialog] = useState(false);
   const [edit, setEdit] = useState(false);
   const [infoNuevoProducto, setInfoNuevoProducto] = useState({
      _id: producto._id,
      description: producto.description,
      perunit: producto.perunit,
      state: producto.state
   });

   const actualizarProducto= async () => {
      //enviar la info al backend
      await editarProducto(
         producto._id,
         {
            description: infoNuevoProducto.description,
            perunit: infoNuevoProducto.perunit,
            state: infoNuevoProducto.state,
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
   
   const deleteProduct = async () => {
      await eliminarProducto(
         producto._id,
         (response) => {
            console.log(response.data);
            toast.success('Producto eliminado con éxito');
         },
         (error) => {
            console.error(error);
            toast.error('Error eliminando el producto');
         }
      );
      setOpenDialog(false);
   };

   return (
      <tr>
         {edit ? (
            <>
               <td>{infoNuevoProducto._id}</td>
               <td>
                  <input
                     className='textBox'
                     type='text'
                     value={infoNuevoProducto.description}
                     onChange={(e) => setInfoNuevoProducto({ ...infoNuevoProducto, description: e.target.value })}
                  />
               </td>
               <td>
                  <input
                     className='textBox'
                     type='text'
                     value={infoNuevoProducto.perunit}
                     onChange={(e) =>
                        setInfoNuevoProducto({ ...infoNuevoProducto, perunit: e.target.value })
                     }
                  />
               </td>
               <td>
                  <input
                     className='textBox'
                     type='text'
                     value={infoNuevoProducto.state}
                     onChange={(e) =>
                        setInfoNuevoProducto({ ...infoNuevoProducto, state: e.target.value })
                     }
                  />
               </td>
            </>
         ) : (
            <>
               <td>{producto._id.slice(20)}</td>
               <td>{producto.description}</td>
               <td>{producto.perunit}</td>
               <td>{producto.state}</td>
            </>
         )}
         <td>
            <div className='actions'>
               {edit ? (
                  <>
                     <Tooltip title='Confirmar Edición' arrow>
                        <i
                           onClick={() => actualizarProducto()}
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
                  <Tooltip title='Editar Producto' arrow>
                     <i
                        onClick={() => setEdit(!edit)}
                        className='fas fa-pencil-alt iconEdit'
                     />
                  </Tooltip>
                  <Tooltip title='Eliminar Producto' arrow>
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
                     ¿Está seguro de querer eliminar el producto?
                  </h1>
                  <div className='dialogButton'>
                     <button
                        onClick={() => deleteProduct()}
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

export default DataBaseProduct;