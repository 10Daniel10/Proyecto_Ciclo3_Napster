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
                  <Link to='/login'>
                     Iniciar Sesión
                  </Link><br></br>
                  <Link to="/modificacion_usuario">
                     Editar Cuenta
                  </Link>
               </td>
            </tr>
         </tbody>
      </table>
   )
}

export default DataBaseUser;