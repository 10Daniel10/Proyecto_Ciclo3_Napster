import '../styles/App.css';
import '../Media/Background.jpg';
import { Link } from 'react-router-dom';

function ModProd() {
    return (
      <div className="App2">
      <header>
          <br></br>
          <h1 className="TituloH1">MÓDULO ADMINISTRADOR DE PRODUCTOS</h1> 
      </header>
      <body className="BodyReg">
      <form action="" method="" >
      <section className="form-register">
      <h4>Modifique producto</h4>
      <input className="controls" type="text" name="desc_pord" id="desc_prod" placeholder="Descriptción del producto"></input>
      <input className="controls" type="text" name="val_unit" id="val_unit" placeholder="Valor unitario"></input>
      <label className="controls2">Estado</label>
      <input class="radiob" type="radio" value="disponible" name="disponibilidad" /> Disponible
      <input class="radiob" type="radio" value="noDisponible" name="disponibilidad" /> No Disponible
      <button className="botons" type="submit" value="Enviar">Modificar Producto</button>
      <button className="botons" type="reset" value="Reestablecer">Limpiar Campos</button>
      <Link to='/'> <a id="volver">Volver</a> </Link>
      </section>
      </form>
      </body>
      </div>
    );
  }
  export default ModProd;