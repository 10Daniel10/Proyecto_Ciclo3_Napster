import React, { useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import PrivateRoute from 'components/PrivateRoute';

const PrivateLayout = ({ children }) => {

   const { user, isAuthenticated, isLoading } = useAuth0();

   useEffect(() => {
      console.log(user, isAuthenticated, isLoading)
   }, [user, isAuthenticated, isLoading])

   return (
      <div>
         <PrivateRoute>
            <div>
               <>
                  {children}
               </>
            </div>
         </PrivateRoute>
      </div>
   );
};

export default PrivateLayout;