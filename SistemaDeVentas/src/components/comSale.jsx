import React, {useState, useEffect} from 'react';
import {eliminarVentas, editarVentas} from 'utils/api.js'
import { Dialog, Tooltip } from '@mui/material';
import { obtenerVentas } from 'utils/api';
import { toast } from 'react-toastify';
import { nanoid } from 'nanoid';
import 'styles/style.css';


const DataBaseSale = () => {

   const [ventas, setVentas] = useState([]);

   useEffect(() => {
      const fetchVentas = async () => {
         await obtenerVentas(
            (response) => {
               setVentas(response.data);      
            }, 
            (error) => {
               console.error(error);
            }
         );
      };
      fetchVentas();   
   }, [setVentas]);

   return (
      <table className='tabla'>
         <thead>
            <tr>
               <td>ID Venta</td>
               <td>Producto</td>
               <td>Cantidad</td>
               <td>Valor Unitario</td>
               <td>Fecha de Venta</td>
               <td>Usuario</td>
               <td>Vendedor</td>
               <td>Estado</td>
               <td>Acciones</td>
            </tr>
         </thead>
         <tbody>
            {ventas.map((el) => {
               return (
                  <FilaVenta
                     key={nanoid()}
                     venta = {el}
                  />
               );
            })}
         </tbody>
      </table>
   )
};

const FilaVenta = ({venta}) => {
   const [openDialog, setOpenDialog] = useState(false);
   const [edit, setEdit] = useState(false);
   const [infoNuevoVenta, setInfoNuevoVenta] = useState({
      _id:venta._id,
      product: venta.product,
      amount: venta.amount,
      perunit: venta.perunit,
      date: venta.date,
      ID_Client: venta.ID_Client,
      NameClient: venta.NameClient,
      Seller: venta.Seller,
      state: venta.state
   });

   const actualizarVenta = async () => {
      //enviar la info al backend
      await editarVentas(
         venta._id,
         {
            product: infoNuevoVenta.product,
            amount: infoNuevoVenta.amount,
            perunit: infoNuevoVenta.perunit,
            date: infoNuevoVenta.date,
            ID_Client: infoNuevoVenta.ID_Client,
            NameClient: infoNuevoVenta.NameClient,
            Seller: infoNuevoVenta.Seller,
            state: infoNuevoVenta.state
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
   
   const deleteSale = async () => {
      await eliminarVentas(
         venta._id,
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
               <td>{infoNuevoVenta._id.slice(20)}</td>
               <td>
                  <input
                     className='textBox'
                     type='text'
                     value={infoNuevoVenta.product}
                     onChange={(e) => setInfoNuevoVenta({ ...infoNuevoVenta, name: e.target.value })}
                  />
               </td>
               <td>
                  <input
                     className='textBox'
                     type='text'
                     value={infoNuevoVenta.amount}
                     onChange={(e) =>
                        setInfoNuevoVenta({ ...infoNuevoVenta, amount: e.target.value })
                     }
                  />
               </td>
               <td>
                  <input
                     className='textBox'
                     type='text'
                     value={infoNuevoVenta.perunit}
                     onChange={(e) =>
                        setInfoNuevoVenta({ ...infoNuevoVenta, perunit: e.target.value })
                     }
                  />
               </td>
               <td>
                  <input
                     className='textBox'
                     type='text'
                     value={infoNuevoVenta.date}
                     onChange={(e) =>
                        setInfoNuevoVenta({ ...infoNuevoVenta, date: e.target.value })
                     }
                  />
               </td>
               <td>
                  <input
                     className='textBox'
                     type='text'
                     value={infoNuevoVenta.NameClient}
                     onChange={(e) =>
                        setInfoNuevoVenta({ ...infoNuevoVenta, NameClient: e.target.value })
                     }
                  />
               </td>
               <td>
                  <input
                     className='textBox'
                     type='text'
                     value={infoNuevoVenta.Seller}
                     onChange={(e) =>
                        setInfoNuevoVenta({ ...infoNuevoVenta, Seller: e.target.value })
                     }
                  />
               </td>
               <td>
                  <input
                     className='textBox'
                     type='text'
                     value={infoNuevoVenta.state}
                     onChange={(e) =>
                        setInfoNuevoVenta({ ...infoNuevoVenta, state: e.target.value })
                     }
                  />
               </td>
            </>
         ) : (
            <>
               <td>{venta._id.slice(20)}</td>
               <td>{venta.product}</td>
               <td>{venta.amount}</td>
               <td>{venta.perunit}</td>
               <td>{venta.date}</td>
               <td>{venta.NameClient}</td>
               <td>{venta.Seller}</td>
               <td>{venta.state}</td>
            </>
         )}
         <td>
            <div className='actions'>
               {edit ? (
                  <>
                     <Tooltip title='Confirmar Edición' arrow>
                        <i
                           onClick={() => actualizarVenta()}
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
                  <Tooltip title='Editar Venta' arrow>
                     <i
                        onClick={() => setEdit(!edit)}
                        className='fas fa-pencil-alt iconEdit'
                     />
                  </Tooltip>
                  <Tooltip title='Eliminar Venta' arrow>
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
                     ¿Está seguro de querer eliminar la venta?
                  </h1>
                  <div className='dialogButton'>
                     <button
                        onClick={() => deleteSale()}
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

export default DataBaseSale;