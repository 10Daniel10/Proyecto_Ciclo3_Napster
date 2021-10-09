import {Link} from 'react-router-dom';
import 'styles/style.css';

function DataBaseUser({name, user, userType, email, state}){
   return(
      <table>
         <tbody>
            <tr className="dataBase">
               <td><input type="checkbox"/></td>
               <td>{name}</td>
               <td>{user}</td>
               <td>{userType}</td>
               <td>{email}</td>
               <td>{state}</td>
               <td>
                  <a href="login">Iniciar Sesión</a><br></br>
                  <Link to="/modificacion_usuario">
                     <a>Editar Cuenta</a>
                  </Link>
               </td>
            </tr>
         </tbody>
      </table>
   )
}

export default DataBaseUser;