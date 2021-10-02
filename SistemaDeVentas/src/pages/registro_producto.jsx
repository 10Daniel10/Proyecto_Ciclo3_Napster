import '../styles/App.css';
import '../Media/Background.jpg';

function RegProd() {
    return (
      <div className="App">
      <header>
          <br></br>
          <h1>MÓDULO ADMINISTRADOR DE VENTAS</h1> 
      </header>
      <body>
      <form action="" method="" >
      <section className="form-register">
      <h4>Ingrese producto</h4>
      <input className="controls" type="number" min= {1} max={20} name="id_prod" id="id_prod" placeholder="Identificador del producto"></input>
      <input className="controls" type="text" name="desc_pord" id="desc_prod" placeholder="Descriptción del producto"></input>
      <input className="controls" type="text" name="val_unit" id="val_unit" placeholder="Valor unitario"></input>
      <label className="controls2">Estado</label>
      <input class="radiob" type="radio" value="disponible" name="disponibilidad" /> Disponible
      <input class="radiob" type="radio" value="noDisponible" name="disponibilidad" /> No Disponible
      <button className="botons" type="submit" value="Enviar">Registar Producto</button>
      <button className="botons" type="reset" value="Reestablecer">Limpiar Campos</button>
      <p><a href="#">Página Principal</a></p>
      </section>
      </form>
      </body>
      </div>
    );
  }
  export default RegProd;