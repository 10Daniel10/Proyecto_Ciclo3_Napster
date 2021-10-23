import '../styles/App.css';
import '../Media/Background.jpg';
import React, { useRef} from 'react';
import { crearVentas } from 'utils/api.js';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const RegVenta = () => {

  const form = useRef(null);

  const SubmitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);

    const nuevaVenta = {};
      fd.forEach((value, key) => {
      nuevaVenta[key] = value;
    });

    await crearVentas(
      {
        product: nuevaVenta.product,
        amount: nuevaVenta.amount,
        perunit: nuevaVenta.perunit,
        date: nuevaVenta.date,
        ID_Client: nuevaVenta.ID_Client,
        NameClient: nuevaVenta.NameClient,
        Seller: nuevaVenta.Seller,
        state: nuevaVenta.state
      },
      (response) => {
        console.log(response.data);
        toast.success('Venta agregado con éxito');
      },
      (error) => {
        console.error(error);
        toast.error('Error creando una venta');
      }
    );
      //setMostrarTabla(true);
  }

  return (
    <div className="App2">
      <header>
          <br></br>
          <h1 className="TituloH1">MÓDULO ADMINISTRADOR DE VENTAS</h1> 
      </header>
      <body className="BodyReg form-register">
        <form ref={form} onSubmit={SubmitForm} >
          <h4>Ingrese venta</h4>

          <label htmlFor='product'>
            <input className="controls" type="text" name="product" placeholder="Producto" required></input>
          </label>

          <label htmlFor='amount'>
            <input className="controls" type="number" name="amount" placeholder="Cantidad" required></input>
          </label>

          <label htmlFor='perunit'>
            <input className="controls" type="number" name="perunit" placeholder="Precio unitario" required></input>
          </label>

          <label className="controls2" htmlFor='date'>Fecha de venta:
            <input type="date" name="date"></input>
          </label><br></br><br></br>

          <label htmlFor='ID_Client'>
            <input className="controls" type="number" name="ID_Client" placeholder="Número de identificación cliente" required></input>
          </label><br></br>

          <label htmlFor='NameClient'>
            <input className="controls" type="text" name="NameClient" placeholder="Nombre del cliente" required></input>
          </label><br></br>

          <label htmlFor='Seller'>
            <input className="controls" type="text" name="Seller" placeholder="Vendedor" required></input>  
          </label>

          <label className="controls2">Estado venta:</label><br></br><br></br>
          <label htmlFor='state'>
            <input className="radiob" type="radio" value="EnProceso" name="state" /> En proceso
            <input className="radiob" type="radio" value="Cancelado" name="state" /> Cancelado
            <input className="radiob" type="radio" value="Entregado" name="state" /> Entregado
          </label>

          <button className="botons" type="submit" value="Enviar">Registar venta</button>
          <button className="botons" type="reset" value="Reestablecer">Limpiar Campos</button>
          <Link to="gestion_ventas">
            <button className="botons" type="reset" value="Reestablecer">Ir a Gestión de Ventas</button>
          </Link>

          <Link to='/'>Volver</Link>
        </form>
      </body>
    </div>
  );
}

export default RegVenta;