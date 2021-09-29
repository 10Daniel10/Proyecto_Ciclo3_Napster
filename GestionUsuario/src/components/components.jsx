import {Link} from 'react-router-dom';

function DataBase({name, user, userType, email, date}){
   return(
      <ul className="dataBase">
         <li><input type="checkbox"/></li>
         <li>{name}</li>
         <li>{user}</li>
         <li>{userType}</li>
         <li>{email}</li>
         <li>{date}</li>
         <li>
            <a href="login">Iniciar Sesión</a><br></br>
            <Link to="editAccount"></Link>
         </li>
      </ul>
   )
}


export default DataBase;