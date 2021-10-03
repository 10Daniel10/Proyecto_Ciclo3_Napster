import '../styles/App.css';
import '../Media/Background.jpg';
import { Link } from 'react-router-dom';

function ModUsuario() {
    return (
      <div className="App2">
      <header>
          <br></br>
          <h1 className="TituloH1">MÓDULO ADMINISTRADOR DE USUARIOS</h1> 
      </header>
      <body className="BodyReg">
      <form action="" method="" >
      <section className="form-register">
      <h4>Modifique usuario</h4>
      <label className="controls2">Rol:</label>
      <br></br>
      <br></br>
      <section>
      <input class="radiob" type="radio" value="disponible" name="disponibilidad" /> Administrador
      <input class="radiob" type="radio" value="noDisponible" name="disponibilidad" /> Vendedor
      </section>
      <br></br>
     
     
      <label className="controls2">Estado usuario:</label>
      <br></br>
      <br></br>
      <section>
      <input class="radiob" type="radio" value="disponible" name="disponibilidad" /> Pendiente
      <input class="radiob" type="radio" value="noDisponible" name="disponibilidad" /> Autorizado
      <input class="radiob" type="radio" value="noDisponible" name="disponibilidad" /> No autorizado
      </section>

      <button className="botons" type="submit" value="Enviar">Modificar Usuario</button>
      <button className="botons" type="reset" value="Reestablecer">Limpiar Campos</button>
      <Link to='/'> <a id="volver">Volver</a> </Link>
      </section>
      </form>
      </body>
      </div>
    );
  }
  export default ModUsuario;