import React, { useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'

const UserDetails = () => {

   const { isLoading, isAuthenticated, loginWithRedirect, getAccessTokenSilently } = useAuth0();

   useEffect(() => {
      const gat = async () => {
         const accessToken = await getAccessTokenSilently({
            audience: 'sistema-de-ventas-napster',
         });
         console.log(accessToken);
      }
      gat()
   }, []);

   if (isLoading) return <div>Loading</div>

   if (isAuthenticated) {
      return loginWithRedirect();
   }
}

export default UserDetails;
