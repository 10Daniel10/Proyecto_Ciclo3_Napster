import React, {useEffect} from 'react';
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import 'styles/style.css';

const PrivateRoute = ({ children }) => {
   const { isAuthenticated, isLoading, getAccessTokenSilently } = useAuth0();

   useEffect(() => {
      
      const fetchAuth0Token = async () => {
         const accessToken = await getAccessTokenSilently({
            audience: `api-sistemadeventas-napster`
         });
         localStorage.setItem('token', accessToken);
      };

      if (isAuthenticated) {
         fetchAuth0Token();
      };

   }, [isAuthenticated, getAccessTokenSilently])
   
   if (isLoading) {
      return <div className='loading'><ReactLoading type='bubbles' color='azure' height={667} width={375} /></div>;
   }

   return isAuthenticated ? (
         <> {children} </>
      ) : (
         <div>
         No autorizado. Debes &nbsp;<Link to='/'>retornar al home</Link>&nbsp; e ingresar sesión.
         </div>
   );
};

export default PrivateRoute;