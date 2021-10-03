import '../styles/App.css';
import '../Media/Background.jpg';
import { Link } from 'react-router-dom';

function RegVenta() {
    return (
      <div className="App2">
      <header>
          <br></br>
          <h1 className="TituloH1">MÓDULO ADMINISTRADOR DE VENTAS</h1> 
      </header>
      <body className="BodyReg">
      <form action="" method="" >
      <section className="form-register">
      <h4>Ingrese venta</h4>
      <input className="controls" type="number" min= {1} max={20} name="id_venta" id="id_venta" placeholder="Identificador de la venta"></input>
      <input className="controls" type="text" name="id_producto" id="id_producto" placeholder="Identificador del producto"></input>
      <input className="controls" type="number" name="cantidad" id="cantidad" placeholder="Cantidad"></input>
      <input className="controls" type="number" name="prec_unitario" id="prec_unitario" placeholder="Precio unitario"></input>
      <label for="fecha" className="controls2">Fecha de venta:</label>
      <input type="date" id="fecha" name="fecha"></input>
      <br></br>
      <br></br>
      <input className="controls" type="number" name="ident_cliente" id="ident_cliente" placeholder="Número de identificación cliente"></input>
      <input className="controls" type="text" name="nomb_cliente" id="nomb_cliente" placeholder="Nombre del cliente"></input>
      <input className="controls" type="text" name="dendedor" id="vendedor" placeholder="Vendedor"></input>  
      <input className="controls" type="text" name="val_total" id="val_total" placeholder="Valor total"></input>
      <label className="controls2">Estado venta:</label>
      <br></br>
      <br></br>
      <section>
      <input class="radiob" type="radio" value="disponible" name="disponibilidad" /> En proceso
      <input class="radiob" type="radio" value="noDisponible" name="disponibilidad" /> Cancelado
      <input class="radiob" type="radio" value="noDisponible" name="disponibilidad" /> Entregado
      </section>
      <button className="botons" type="submit" value="Enviar">Registar venta</button>
      <button className="botons" type="reset" value="Reestablecer">Limpiar Campos</button>
      <Link to='/'> <a id="volver">Volver</a> </Link>
      </section>
      </form>
      </body>
      </div>
    );
  }
  export default RegVenta;