import '../styles/App.css';
import '../Media/Background.jpg';
import { Link } from 'react-router-dom';
import {useRef} from 'react';
import { toast } from 'react-toastify';
import { crearProducto } from 'utils/api';

const RegProd = () => {

  const form = useRef(null);

  const SubmitForm = async (e) => {
    e.preventDefault();
    const fd = new FormData(form.current);
  
    const nuevoProducto = {};
      fd.forEach((value, key) => {
        nuevoProducto[key] = value;
    });

  await crearProducto(
    {
      description: nuevoProducto.description,
      perunit: nuevoProducto.perunit,
      state: nuevoProducto.state,
    },
    (response) => {
      console.log(response.data);
      toast.success('Producto agregado con éxito');
    },
    (error) => {
      console.error(error);
      toast.error('Error creando un Producto');
    }
  );
  //setMostrarTabla(true);
  }

  return (
    <div className="App2">
      <header>
          <br></br>
          <h1 className="TituloH1">MÓDULO ADMINISTRADOR DE PRODUCTOS</h1> 
      </header>
      <body className="BodyReg form-register">
        <form ref={form} onSubmit={SubmitForm} >
          <h4>Ingrese Producto</h4>

          <label htmlFor='description'>
            <input className="controls" type="text" name="description" placeholder="Descriptción del producto" required></input>
          </label>

          <label htmlFor='perunit'>
            <input className="controls" type="text" name="perunit" placeholder="Valor unitario" required></input>
          </label>

          <label className="controls2">Estado</label>
          <label htmlFor='state'>
            <input className="radiob" type="radio" value="Disponible" name="state"/> Disponible
            <input className="radiob" type="radio" value="No Disponible" name="state" /> No Disponible
          </label>
          
          <button className="botons" type="submit" value="Enviar">Registar Producto</button>
          <button className="botons" type="reset" value="Reestablecer">Limpiar Campos</button>
          <Link to="gestion_productos">
            <button className="botons" type="reset" value="Reestablecer">Ir a Gestión de Productos</button>
          </Link>

          <Link to='/'>Volver</Link>
        </form>
      </body><br></br><br></br><br></br><br></br>
    </div>
  );
};

export default RegProd;